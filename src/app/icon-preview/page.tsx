import fs from 'fs';
import path from 'path';

const CATEGORIES = [
  { key: 'areas', label: 'Áreas de atención' },
  { key: 'etapas', label: 'Etapas de desarrollo' },
  { key: 'proceso', label: 'Proceso' },
  { key: 'valores', label: 'Valores y diferenciales' },
  { key: 'recursos', label: 'Recursos y contenido' },
  { key: 'contacto', label: 'Contacto y comunicación' },
  { key: 'personas', label: 'Personas' },
  { key: 'informacion', label: 'Información y ayuda' },
  { key: 'seguridad', label: 'Seguridad y legales' },
  { key: 'decorativos', label: 'Elementos decorativos' },
];

function getIcons(category: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'icons', 'empiria', category);
  try {
    if (fs.existsSync(dir)) {
      return fs.readdirSync(dir).filter((f: string) => f.endsWith('.png')).sort();
    }
  } catch { /* empty */ }
  return [];
}

export default function IconPreviewPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-[#5B4B9E] mb-2">
        Previsualización de Iconos Empiria
      </h1>
      <p className="text-gray-500 mb-6">Iconos extraídos de la Galería de Iconos de referencia</p>

      <details open className="mb-10 bg-white rounded-xl border border-gray-100 p-4">
        <summary className="cursor-pointer font-semibold text-[#3E3B52]">Imagen de referencia</summary>
        <img src="/reference/galeria-iconos.png" alt="Galería de Iconos Empiria" className="mt-4 w-full max-w-[1536px] h-auto" />
      </details>

      {CATEGORIES.map(({ key, label }) => {
        const icons = getIcons(key);
        if (icons.length === 0) return null;
        return (
          <div key={key} className="mb-10">
            <h2 className="text-xl font-semibold text-[#3E3B52] mb-4 border-b border-[#E8E4F7] pb-2">
              {label} ({icons.length})
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {icons.map((icon) => (
                <div
                  key={icon}
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-2">
                    <div className="w-20 h-20 flex items-center justify-center">
                      <img
                        src={`/icons/empiria/${key}/${icon}`}
                        alt={icon.replace('.png', '')}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-[#F1EEFB]">
                      <img
                        src={`/icons/empiria/${key}/${icon}`}
                        alt=""
                        className="max-w-[80%] max-h-[80%] object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center leading-tight">
                    {icon.replace('.png', '')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
