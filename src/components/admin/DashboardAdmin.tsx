import React, { useEffect, useState } from 'react';

type Donation = {
  id: string;
  created_at: string;
  amount: number;
  name: string;
  email: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'failed';
  payment_proof?: string;
}

export default function AdminDashboard() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await fetch('/api/donations');
      const data = await response.json();
      setDonations(data || []);
    } catch (error) {
      console.error('Error fetching donations:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateDonationStatus = async (id: string, status: 'confirmed' | 'failed') => {
    try {
      const response = await fetch(`/api/donations/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) throw new Error('Failed to update donation');
      fetchDonations();
    } catch (error) {
      console.error('Error updating donation:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-gray-600">Memuat data...</div>
      </div>
    );
  }

  const totalDonations = donations.reduce((sum, donation) => 
    donation.status === 'confirmed' ? sum + donation.amount : sum, 0
  );

  return (
    <div className="p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Dashboard Admin Donasi</h1>
        <div className="bg-emerald-50 p-4 rounded-lg">
          <p className="text-emerald-800">
            Total Donasi Terkonfirmasi: {' '}
            <span className="font-bold">
              {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR'
              }).format(totalDonations)}
            </span>
          </p>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-4 text-left">Tanggal</th>
              <th className="p-4 text-left">Nama</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-right">Jumlah</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {donations.map((donation) => (
              <tr key={donation.id} className="hover:bg-gray-50">
                <td className="p-4">
                  {new Date(donation.created_at).toLocaleDateString('id-ID')}
                </td>
                <td className="p-4">{donation.name}</td>
                <td className="p-4">{donation.email}</td>
                <td className="p-4 text-right">
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR'
                  }).format(donation.amount)}
                </td>
                <td className="p-4 text-center">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                      donation.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : donation.status === 'failed'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {donation.status === 'confirmed' ? 'Terkonfirmasi' :
                     donation.status === 'failed' ? 'Ditolak' : 'Menunggu'}
                  </span>
                </td>
                <td className="p-4 text-center">
                  {donation.status === 'pending' && (
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => updateDonationStatus(donation.id, 'confirmed')}
                        className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Konfirmasi
                      </button>
                      <button
                        onClick={() => updateDonationStatus(donation.id, 'failed')}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Tolak
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {donations.length === 0 && (
              <tr>
                <td colSpan={6} className="p-4 text-center text-gray-500">
                  Belum ada data donasi
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}