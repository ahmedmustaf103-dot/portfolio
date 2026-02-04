"use client";

interface WorkWithMeProps {
  line?: string;
  subtitle?: string;
}

/**
 * Short "Work with me" / availability line to sound more hireable.
 */
export default function WorkWithMe({
  line = "Available for freelance and full-time roles.",
  subtitle,
}: WorkWithMeProps) {
  return (
    <section className="w-full bg-slate-800/80 py-12 sm:py-14 md:py-16 px-6 sm:px-8 md:px-12 border-t border-slate-700">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xl sm:text-2xl font-semibold text-white mb-2">
          {line}
        </p>
        {subtitle && (
          <p className="text-slate-400 text-base sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
