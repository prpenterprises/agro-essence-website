import './globals.css';
import Header from '@/components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export const metadata = {
  title: "AgroEssence | Organic Fertilizers & Garden Supplies",
  description:
    "AgroEssence provides high quality vermicompost, neem khali, cocopeat, fertilizers, garden tools and plant care products for home gardening and agriculture.",
  keywords: [
    "vermicompost",
    "neem khali",
    "cocopeat",
    "garden tools",
    "organic fertilizer",
    "plant nutrition",
    "home gardening products",
    "agriculture store India",
    "agroessence",
    "agro essence gardening products",
    "PRP enterprises near me",
    "PRP enterprises gardening products"
  ],
  authors: [{ name: "AgroEssence" }],
  openGraph: {
    title: "AgroEssence",
    description: "Premium gardening and agriculture products",
    url: "https://yourdomain.com",
    siteName: "AgroEssence",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'GardenStore',
              name: 'AgroEssence',
              description:
                'Supplier of vermicompost, cocopeat, fertilizers, plant nutrition products, and gardening tools.',
              url: 'https://agroessence.in',
              telephone: '+91-9599804558',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Tyagi Complex, Brij Vihar',
                addressLocality: 'Ghaziabad',
                addressRegion: 'UP',
                postalCode: '201011',
                addressCountry: 'IN',
              },
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
