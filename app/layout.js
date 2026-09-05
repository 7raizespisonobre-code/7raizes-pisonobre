import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://7raizes-pisonobre.vercel.app"),

  title: "7 Raízes | Restauração de Pisos Nobres em São Paulo",

  description:
    "7 Raízes - Restauração de pisos nobres, tacos e assoalhos de madeira. Raspagem, lixamento, calafetação e aplicação de vernizes em São Paulo e região.",

  keywords: [
    "restauração de pisos",
    "restauração de piso de madeira",
    "raspagem de piso",
    "raspagem de taco",
    "lixamento de piso",
    "calafetação de piso",
    "verniz para piso de madeira",
    "restauração de tacos",
    "assoalho de madeira",
    "pisos nobres",
    "São Paulo"
  ],

  authors: [
    {
      name: "7 Raízes - Restauração de Pisos Nobres"
    }
  ],

  creator: "7 Raízes",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },

  alternates: {
    canonical: "https://7raizes-pisonobre.vercel.app/"
  },

  openGraph: {
    title:
      "7 Raízes | Restauração de Pisos Nobres em São Paulo",

    description:
      "Restauração profissional de tacos, assoalhos e pisos de madeira em São Paulo e região.",

    url: "https://7raizes-pisonobre.vercel.app/",

    siteName: "7 Raízes",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/piso-fundo.jpg",
        width: 1200,
        height: 630,
        alt: "7 Raízes - Restauração de Pisos Nobres"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",

    title:
      "7 Raízes | Restauração de Pisos Nobres",

    description:
      "Restauração de tacos, assoalhos e pisos de madeira em São Paulo.",

    images: ["/piso-fundo.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
