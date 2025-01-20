export interface Donation {
  id?: number
  name: string
  city: string
  amount: number
  status: 'pending' | 'verified' | 'completed'
  created_at?: string
}

export interface DonationProgress {
  total_goal: number
  current_amount: number
  donors_count: number
}