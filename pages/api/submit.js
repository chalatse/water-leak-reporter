// pages/api/submit.js
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp, getApps } from 'firebase/app';
import { firebaseConfig } from '@/lib/firebase'; // Make sure this is correct

if (!getApps().length) {
  initializeApp(firebaseConfig);
}
const db = getFirestore();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { title, location, severity, description, contactInfo, timestamp } = req.body;

  try {
    await addDoc(collection(db, 'leakReports'), {
      title,
      location,
      severity,
      description,
      contactInfo,
      timestamp,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Submission error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
