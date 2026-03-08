import './globals.css';
import Header from '@/components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export const metadata = {
  title: "Agro Essence",
  description: "Agricultural Products Store",
  viewport: "width=device-width, initial-scale=1"
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
