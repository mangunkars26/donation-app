"use client";

import React from "react";
import { X } from "lucide-react";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedImage: string;
}

export default function GalleryModal({ isOpen, onClose, selectedImage }: GalleryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <X className="w-8 h-8" />
      </button>
      <img
        src={selectedImage}
        alt="Gallery preview"
        className="max-w-[90%] max-h-[90vh] object-contain"
      />
    </div>
  );
}