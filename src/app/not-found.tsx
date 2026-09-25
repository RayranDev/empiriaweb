import { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SupportChatIcon } from "@/components/icons";
import { getWhatsAppLink } from "@/data/contact";

// No manual `robots` export needed here: Next.js automatically injects
// `<meta name="robots" content="noindex" />` on any response that returns a
// 404 status, which is what rendering this file via the `notFound()` /
// unmatched-route convention does.
export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 sm:py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="flex justify-center">
          <SupportChatIcon size={96} />
        </div>

        <Badge variant="lavender">Error 404</Badge>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2D2D3A] tracking-tight">
          No encontramos esta página
        </h1>

        <p className="text-base sm:text-lg text-[#3E3B52] leading-relaxed">
          El enlace puede estar desactualizado o la página pudo haberse movido. Volvamos al inicio, o escríbenos directamente si necesitas ayuda.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button href="/" variant="primary" size="lg">
            Volver al inicio
          </Button>
          <Button
            href={getWhatsAppLink()}
            variant="outline"
            size="lg"
            isExternal
          >
            Hablar por WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
