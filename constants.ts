import { Brush, Heart, Star, Sparkles, Clock, MapPin, Instagram, Phone, Mail, Award, Smile } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'The Royal Maharashtrian',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1595959183082-7bce142cf752?q=80&w=800&auto=format&fit=crop',
    description: 'Traditional Nauvari look with classic gold jewelry and bold eyes.',
  },
  {
    id: 2,
    title: 'Sangeet Glamour',
    category: 'Occasion',
    image: 'https://images.unsplash.com/photo-1621786040822-0a133d9c84e3?q=80&w=800&auto=format&fit=crop',
    description: 'Soft smokey eyes with dewy skin finish for a night of dancing.',
  },
  {
    id: 3,
    title: 'Contemporary Christian Bride',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1546193430-c2d207739ed7?q=80&w=800&auto=format&fit=crop',
    description: 'Minimalist, ethereal look focusing on natural glow and nude lips.',
  },
  {
    id: 4,
    title: 'Golden Hour Reception',
    category: 'Reception',
    image: 'https://images.unsplash.com/photo-1583906376483-36c9657685c4?q=80&w=800&auto=format&fit=crop',
    description: 'High-voltage glam with shimmering highlighter and defined contours.',
  },
  {
    id: 5,
    title: 'Haldi Radiance',
    category: 'Occasion',
    image: 'https://images.unsplash.com/photo-1634316427426-5a74e5033c41?q=80&w=800&auto=format&fit=crop',
    description: 'Fresh, floral-inspired look that stays put.',
  },
  {
    id: 6,
    title: 'Deep Rose Elegance',
    category: 'Bridal',
    image: 'https://images.unsplash.com/photo-1594901618693-0182414777d8?q=80&w=800&auto=format&fit=crop',
    description: 'Rich berry tones and intricate eye makeup for the modern bride.',
  },
];

export const SERVICES = [
  {
    title: 'Bridal Makeup (HD/Airbrush)',
    price: 'Starting ₹15,000',
    features: ['High Definition base', 'Premium lashes', 'Hair styling included', 'Draping assistance'],
    icon: Sparkles
  },
  {
    title: 'Engagement / Reception',
    price: 'Starting ₹8,000',
    features: ['Glamorous finish', 'Long-lasting setting', 'Choice of hairstyle', 'Touch-up kit'],
    icon: Star
  },
  {
    title: 'Party & Guest Makeup',
    price: 'Starting ₹3,500',
    features: ['Natural or Glam look', 'Group discounts available', 'Quick turnaround', 'Hairstyling'],
    icon: Brush
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Bride',
    text: "Shalini made me feel like an absolute queen on my big day. The makeup felt so light yet looked flawless in every photo!",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 2,
    name: 'Neha Patil',
    role: 'Engagement',
    text: "Her attention to detail is unmatched. She perfectly understood the subtle look I wanted for my ring ceremony.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 3,
    name: 'Anjali Deshmukh',
    role: 'Sangeet',
    text: "Punctual, professional, and incredibly talented. The makeup stayed intact through hours of dancing!",
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const STATS = [
  { label: 'Brides Transformed', value: '200+', icon: Heart },
  { label: 'Years Experience', value: '5+', icon: Clock },
  { label: 'Happy Clients', value: '500+', icon: Smile },
  { label: 'Awards Won', value: '12', icon: Award },
];