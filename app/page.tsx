"use client";

import { Orbitron } from "next/font/google";

import { useState } from "react";

const orbitron = Orbitron({
  subsets: ["latin"],
});

export default function Home() {
  const [showMasteringModal, setShowMasteringModal] = useState(false);
  const [showProductionModal, setShowProductionModal] = useState(false);
  return (
    <main className="min-h-screen bg-black text-white">
            {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold">
            pr<span className="text-green-500">0</span>dk RECORDS
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#servicios" className="hover:text-green-500 transition">
  Servicios
</a>

            <a href="#ejemplos" className="hover:text-green-500 transition">
  Ejemplos
</a>
            

            <a href="#contacto" className="hover:text-green-500 transition">
  Contacto
</a>
            
          </div>

        </div>
      </nav>
      {/* HERO */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="absolute w-96 h-96 bg-green-500/10 blur-3xl rounded-full" />

<h1 className={`${orbitron.className} relative text-6xl md:text-7xl font-bold tracking-[0.15em] mb-6`}>
          pr<span className="text-green-500">0</span>dk 
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-10 max-w-2xl leading-tight">
          Producción y masterización online
          <br />
          realizada por una persona.
        </h2>

        <p className="relative text-gray-400 text-lg mb-14 max-w-xl leading-relaxed">
          Sin IA. Sin automatismos.
          <br />
          
        </p>

        <div className="relative flex flex-col sm:flex-row gap-4">
          <a
  href="#tarifas"
  className="bg-green-500 hover:bg-green-400 text-black px-10 py-5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
>
  Precios
</a>

          <a
  href="#ejemplos"
  className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-10 py-5 rounded-xl font-semibold transition-all duration-300"
>
  Escuchar ejemplos
</a>
        </div>
        </section>

<img
  src="/hero-audio.png"
  alt=""
  className="max-w-2xl w-full mx-auto px-6 pb-24 rounded-2xl shadow-2xl"
/>
<section id="ejemplos" className="px-6 pb-20 max-w-3xl mx-auto text-center">
  <h2 className="text-4xl font-bold mb-6">
    Escucha un ejemplo
  </h2>

  <p className="text-gray-400 mb-8">
    
  </p>

  <audio controls className="w-full">
    <source src="/pr0dk-demo.mp3" type="audio/mpeg" />
    Tu navegador no soporta audio HTML5.
  </audio>
</section>

      {/* SERVICIOS */}
      <section id="servicios" className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

          <div
  onClick={() => setShowMasteringModal(true)}
  className="border border-green-500/30 p-8 rounded-xl bg-zinc-950/50 hover:border-green-500 hover:-translate-y-1 transition-all cursor-pointer"
>
            <h3 className="text-2xl font-bold mb-4 text-green-500">
              Masterización
            </h3>

            <p className="text-gray-400">
  Acabado profesional para tus canciones,
  respetando su identidad sonora.
</p>
          </div>

          <div
  onClick={() => setShowProductionModal(true)}
  className="border border-green-500/30 p-8 rounded-xl bg-zinc-950/50 hover:border-green-500 hover:-translate-y-1 transition-all cursor-pointer"
>
            <h3 className="text-2xl font-bold mb-4 text-green-500">
              Producción
            </h3>

            <p className="text-gray-400">
  Desarrollo de ideas musicales,
  producción completa, arreglos e
  instrumentales a medida para tu proyecto.
</p>
</div>
          
<div className="relative mt-20 w-full max-w-2xl">


</div>
          

        </div>
      </section>
            {/* PROCESO */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            Cómo trabajo
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="text-center border border-green-500/20 rounded-xl p-8 bg-zinc-950/30 hover:border-green-500 hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold text-green-500 mb-4">
                01
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Envías tu proyecto
              </h3>

              <p className="text-gray-400">
                Cuéntame qué necesitas y envíame tu música o referencias.
              </p>
            </div>

            <div className="text-center border border-green-500/20 rounded-xl p-8 bg-zinc-950/30 hover:border-green-500 hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold text-green-500 mb-4">
                02
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Escucho y analizo
              </h3>

              <p className="text-gray-400">
                Dedico tiempo a entender tu visión y las necesidades del proyecto.
              </p>
            </div>

            <div className="text-center border border-green-500/20 rounded-xl p-8 bg-zinc-950/30 hover:border-green-500 hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold text-green-500 mb-4">
                03
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Trabajo en tu música
              </h3>

              <p className="text-gray-400">
                Producción, arreglos o masterización con atención al detalle.
              </p>
            </div>

            <div className="text-center border border-green-500/20 rounded-xl p-8 bg-zinc-950/30 hover:border-green-500 hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold text-green-500 mb-4">
                04
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Entrega y revisiones
              </h3>

              <p className="text-gray-400">
                Recibes el resultado final y realizamos ajustes si son necesarios.
              </p>
            </div>

          </div>

        </div>
      </section>
          {/* EJEMPLOS */}
          <section className="px-6 py-24 max-w-5xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-8">
    ¿Por qué elegir este servicio?
  </h2>

  <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
    No trabajo con procesos completamente automatizados ni aplico la misma fórmula a todas las canciones. Cada proyecto se escucha y se trata de forma individual, teniendo en cuenta su estilo, su intención y la identidad del artista.
    <br /><br />
    Creo que una buena masterización no debería estar reservada únicamente a grandes presupuestos. Por eso ofrezco un servicio accesible, cercano y con trato directo, donde siempre sabrás quién está trabajando en tu música.
    <br /><br />
    El objetivo no es cambiar tu sonido, sino ayudarte a que llegue más lejos sin perder aquello que lo hace único.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="border border-green-500/30 rounded-xl p-6 bg-zinc-950/50">
      <h3 className="text-green-500 font-semibold mb-2">
        Trato directo y personalizado
      </h3>

      <p className="text-gray-400">
        Hablas directamente con la persona que trabaja en tu música.
      </p>
    </div>

    <div className="border border-green-500/30 rounded-xl p-6 bg-zinc-950/50">
      <h3 className="text-green-500 font-semibold mb-2">
        Decisiones basadas en la escucha
      </h3>

      <p className="text-gray-400">
        Cada canción requiere un enfoque diferente y una atención individual.
      </p>
    </div>

    <div className="border border-green-500/30 rounded-xl p-6 bg-zinc-950/50">
      <h3 className="text-green-500 font-semibold mb-2">
        Precios accesibles
      </h3>

      <p className="text-gray-400">
        Porque una buena masterización debería estar al alcance de cualquier artista.
      </p>
    </div>

    <div className="border border-green-500/30 rounded-xl p-6 bg-zinc-950/50">
      <h3 className="text-green-500 font-semibold mb-2">
        Tu sonido es lo primero
      </h3>

      <p className="text-gray-400">
        El objetivo es potenciar tu identidad artística, no sustituirla.
      </p>
    </div>

  </div>
</section>
          <section id="tarifas" className="px-6 py-24 max-w-6xl mx-auto">
  <h2 className="text-4xl font-bold text-center mb-4">
    Tarifas
  </h2>

  <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
    
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    <div className="border border-green-500/30 rounded-2xl p-8 bg-zinc-950/50">
      <h3 className="text-2xl font-bold text-green-500 mb-4">
        STARTER
      </h3>

      <p className="text-5xl font-bold mb-6">
        10€
      </p>

      <ul className="space-y-3 text-gray-300">
        <li>✓ Masterización estéreo</li>
        <li>✓ Entrega en WAV</li>
        <li>✓ Adaptada para plataformas</li>
        <li>✓ Entrega en 24h</li>
      </ul>
    </div>

    <div className="border-2 border-green-500 rounded-2xl p-8 bg-zinc-950">
      <p className="text-yellow-500 text-sm mb-2">
        MÁS ELEGIDO
      </p>

      <h3 className="text-2xl font-bold text-green-500 mb-4">
        STANDARD
      </h3>

      <p className="text-5xl font-bold mb-6">
        15€
      </p>

      <ul className="space-y-3 text-gray-300">
        <li>✓ Hasta 2 revisiones</li>
        <li>✓ Adaptada a plataformas</li>
        <li>✓ WAV + MP3 320 kbps</li>
        <li>✓ Ajustes personalizados</li>
        <li>✓ Entrega max 3h</li>
      </ul>
    </div>

    <div className="border border-green-500/30 rounded-2xl p-8 bg-zinc-950/50">
      <h3 className="text-2xl font-bold text-green-500 mb-4">
        PLUS
      </h3>

      <p className="text-5xl font-bold mb-6">
        20€
      </p>

      <ul className="space-y-3 text-gray-300">
        <li>✓ Todo lo incluido en Standard</li>
        <li>✓ Versiones adicionales</li>
        <li>✓ Entrega prioritaria</li>
        <li>✓ Feedback técnico</li>
      </ul>
    </div>

  </div>

  <p className="text-gray-500 text-center mt-12 max-w-3xl mx-auto">
    Sin automatismos. Sin intermediarios.
  </p>
</section>
      
      {showMasteringModal && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">
    <div className="bg-zinc-950 border border-green-500/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-green-500">
          Solicitud de masterización
        </h2>

        <button
          onClick={() => setShowMasteringModal(false)}
          className="text-gray-400 hover:text-white text-2xl"
        >
          ×
        </button>
      </div>

      <p className="text-gray-400 mb-6">
        Para garantizar el mejor resultado posible, asegúrate de que tu mezcla cumpla los siguientes requisitos:
      </p>

      <div className="bg-zinc-900 rounded-xl p-6 mb-6 text-gray-300">
        <ul className="space-y-2">
          <li>• Formato WAV (.wav)</li>
          <li>• Frecuencia mínima de 44.1 kHz</li>
          <li>• Recomendado: 24 bits</li>
          <li>• Exportación estéreo</li>
          <li>• Sin limitador en el máster</li>
          <li>• Al menos -6 dB de headroom</li>
        </ul>
      </div>

      <form
  action="https://formspree.io/f/mykavlbo"
  method="POST"
>
  <input
    type="text"
    name="artista"
    placeholder="Nombre artístico"
    required
    className="w-full bg-zinc-900 border border-green-500/30 rounded-xl p-4 text-white mb-6"
  />

  <input
    type="email"
    name="email"
    placeholder="Tu email"
    required
    className="w-full bg-zinc-900 border border-green-500/30 rounded-xl p-4 text-white mb-6"
  />

  <textarea
    name="descripcion"
    placeholder="Cuéntame sobre tu canción, referencias o cualquier detalle importante..."
    rows={5}
    required
    className="w-full bg-zinc-900 border border-green-500/30 rounded-xl p-4 text-white mb-6"
  />

  <button
    type="submit"
    className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl transition mb-6"
  >
    Enviar solicitud
  </button>
</form>
<p className="text-gray-400 text-sm mb-4">
  Después de enviar la solicitud, sube tu mezcla a WeTransfer y envía el enlace de descarga a{" "}
  <span className="text-green-500 font-semibold">
    coyotekid45@gmail.com
  </span>.
</p>
      <a
        href="https://wetransfer.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl text-center transition"
      >
        Abrir WeTransfer
      </a>

    </div>
  </div>
)}
{showProductionModal && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">
    <div className="bg-zinc-950 border border-green-500/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-green-500">
          Solicitud de producción
        </h2>

        <button
          onClick={() => setShowProductionModal(false)}
          className="text-gray-400 hover:text-white text-2xl"
        >
          ×
        </button>
      </div>

      <p className="text-gray-400 mb-6">
        Cuéntame tu idea y prepararé una propuesta adaptada a tu proyecto.
      </p>

      <form
        action="https://formspree.io/f/mwvjzagg"
        method="POST"
      >

        <input
          type="text"
          name="artista"
          placeholder="Nombre artístico"
          required
          className="w-full bg-zinc-900 border border-green-500/30 rounded-xl p-4 text-white mb-6"
        />

        <input
          type="email"
          name="email"
          placeholder="Tu email"
          required
          className="w-full bg-zinc-900 border border-green-500/30 rounded-xl p-4 text-white mb-6"
        />

        <textarea
          name="proyecto"
          placeholder="Describe tu proyecto: estilo musical, objetivo, qué necesitas exactamente..."
          rows={5}
          required
          className="w-full bg-zinc-900 border border-green-500/30 rounded-xl p-4 text-white mb-6"
        />

        <textarea
          name="referencias"
          placeholder="Referencias musicales (Spotify, YouTube, artistas, canciones...)"
          rows={3}
          className="w-full bg-zinc-900 border border-green-500/30 rounded-xl p-4 text-white mb-6"
        />

        <select
          name="presupuesto"
          required
          className="w-full bg-zinc-900 border border-green-500/30 rounded-xl p-4 text-white mb-6"
        >
          <option value="">Presupuesto aproximado</option>
          <option value="Menos de 100 €">Menos de 100 €</option>
          <option value="100–300 €">100–300 €</option>
          <option value="300–500 €">300–500 €</option>
          <option value="Más de 500 €">Más de 500 €</option>
          <option value="No estoy seguro">No estoy seguro</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl transition"
        >
          Enviar solicitud
        </button>

      </form>

    </div>
  </div>
)}
      <footer className="border-t border-green-500/20 mt-24">
  <div className="max-w-6xl mx-auto px-6 py-12 text-center">
    <h3 className="text-2xl font-bold mb-4">
      pr<span className="text-green-500">0</span>dk RECORDS
    </h3>

    <p className="text-gray-400 mb-6">
      Producción y masterización online realizada por una persona.
    </p>

    <div className="flex justify-center gap-6 text-sm text-gray-400">
      <a
        href="mailto:coyotekid45@gmail.com"
        className="hover:text-green-500 transition"
      >
        Email
      </a>

      <a
  href="https://instagram.com/pr0dk"
  target="_blank"
  rel="noopener noreferrer"
>
  Instagram
</a>
    </div>

    <p className="text-gray-600 text-sm mt-8">
      © 2026 pr0dk RECORDS. Todos los derechos reservados.
    </p>
  </div>
</footer>
      </main>
  );
}