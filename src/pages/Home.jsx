import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/explorar");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const handleExplorar = () => {
    navigate("/explorar");
  };

  return (
    <div className="min-h-full flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20 bg-gradient-to-b from-primary-50 to-surface-50">
        <div className="text-center max-w-3xl mx-auto">
          {/* Logo/Icono */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-primary-100 rounded-full mb-4">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 text-primary-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-4">
            Relatos de Papel
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-xl mx-auto">
            Tu librería online de confianza. Descubre mundos infinitos entre las
            páginas de nuestros libros.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button label="Explorar catálogo" onClick={handleExplorar} />
          </div>

          {/* Countdown */}
          <p className="text-sm text-secondary-500">
            Serás redirigido automáticamente en{" "}
            <span className="font-bold text-primary-700">{countdown}</span>{" "}
            segundos
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent-100 rounded-full mb-4">
                <svg
                  className="w-7 h-7 text-accent-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">
                Envío gratuito
              </h3>
              <p className="text-sm text-secondary-600">
                En todos tus pedidos sin mínimo de compra
              </p>
            </div>

            <div className="p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
                <svg
                  className="w-7 h-7 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">
                Entrega en 24h
              </h3>
              <p className="text-sm text-secondary-600">
                Recibe tus libros en tiempo récord
              </p>
            </div>

            <div className="p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary-100 rounded-full mb-4">
                <svg
                  className="w-7 h-7 text-secondary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-secondary-900 mb-2">
                Compra segura
              </h3>
              <p className="text-sm text-secondary-600">
                Tus datos siempre protegidos
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
