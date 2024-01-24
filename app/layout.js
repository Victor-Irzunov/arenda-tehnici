import Header from '@/components/Header/Header'
import './globals.css'
import Footer from '@/components/Footer/Footer'

export const metadata = {
  title: 'Создание сайта-визитки в Минске',
  description: 'Наша компания предоставляет профессиональные услуги по созданию сайтов-визиток в Минске. Мы специализируемся на разработке современных и эффективных веб-сайтов, которые подчеркивают уникальность вашего бизнеса. Надежные решения, креативный дизайн и индивидуальный подход - вот что делает нас лучшими в этой отрасли.'
};


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
