import { META_DATA } from '@/constants/data';
import { Poppins } from 'next/font/google';
import Head from "next/head";
import "./globals.css";


// Subsets are really important. CHECK BELOW FOR MORE INFO
const poppins = Poppins({
  weight: ['300', '400', '600', "700", '800'], // Include the weights you need
  subsets: ['latin'], // Define the subsets (e.g., latin)
  display: 'swap', // Optional: define font-display behavior
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{META_DATA.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="public/favicon.ico" />
        <meta name="description" content={META_DATA.description} />
        <meta name="keywords" content={META_DATA.keyword}></meta>
        <meta content="image/*" property="og:image:type" />
        <meta property="og:title" content={META_DATA.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={META_DATA.description} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="200" />
        <meta property="twitter:image:width" content="300" />
        <meta property="twitter:image:height" content="157" />
        <meta name="twitter:card" content={META_DATA.description} />
        <meta name="twitter:title" content={META_DATA.title} />
        <meta name="twitter:type" content="website" />

      </Head>

      <body className={`font-poppins text-[15px] text-slate-900 dark:text-white dark:bg-slate-900 ${poppins.className}`}>

        {children}

      </body>
    </html >
  );
}