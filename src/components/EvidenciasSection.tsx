import { useState } from "react";
interface Evidencia {
  nombre: string;
  fecha: string;
  descripcion: string;
  rawUrl: string;
}
const BASE =
  "https://raw.githubusercontent.com/TonyVega1011/bases-datos-2-evidencias/main/Repo%20semestre%20BD2";
const descsMongo = [
  "insertOne — Inserta una caba\u00f1a (\u201cCozy Cabin Retreat\u201d) con tipo y precio.",
  "insertOne — Inserta un loft con direcci\u00f3n anidada (pa\u00eds y mercado).",
  "insertMany — Inserta m\u00faltiples documentos en una sola operaci\u00f3n.",
  "Error duplicado — Intenta insertar un _id ya existente para observar el error de clave duplicada.",
  "Error duplicado — Variaci\u00f3n del ejercicio anterior con mismo escenario de duplicado.",
  "find + filtro — Busca propiedades en Brasil mostrando nombre y precio.",
  "find + $gt — Filtra propiedades con m\u00e1s de 5 camas.",
  "find + $lt — Busca propiedades con precio menor a $75.",
  "find + $and — Filtra apartamentos en el mercado de Nueva York con $and.",
  "find + $in — Busca propiedades de tipo \u201cHouse\u201d o \u201cCondominium\u201d con $in.",
  "find + $regex — Busca propiedades cuyo nombre contiene \u201cLuxury\u201d (insensible a may\u00fasculas).",
  "find en array — Filtra propiedades que tienen \u201cHeating\u201d en su lista de amenidades.",
  "find + $size — Busca propiedades con exactamente 20 amenidades.",
  "find + sort + limit — Lista las 10 propiedades m\u00e1s caras ordenadas por precio descendente.",
  "find nulos — Encuentra propiedades sin last_review, ordenadas por n\u00famero de rese\u00f1as.",
  "updateOne + $set — Actualiza el tipo de propiedad de \u201cCozy Cabin Retreat\u201d.",
  "updateOne + $push — Actualiza resumen y agrega \u201cSmart TV\u201d a las amenidades de una caba\u00f1a.",
  "updateMany + $inc — Incrementa en 1 el contador de rese\u00f1as de todas las propiedades en Espa\u00f1a.",
  "updateMany + $pull — Elimina \u201cCable TV\u201d de la lista de amenidades en todos los documentos que la tengan.",
  "updateOne + upsert — Actualiza o inserta (\u201cMansi\u00f3n de Prueba\u201d) si no existe, usando la opci\u00f3n upsert: true.",
  "aggregate + $count — Cuenta cu\u00e1ntas propiedades tienen m\u00e1s de 10 amenidades usando $expr y $size.",
  "aggregate + $group — Agrupa por pa\u00eds y calcula el precio promedio, ordenado de mayor a menor.",
  "aggregate + $unwind — Descompone el array de amenidades y obtiene las 5 m\u00e1s frecuentes en toda la colecci\u00f3n.",
  "aggregate + $group — Agrupa por tipo de propiedad y cuenta el total de listings por cada tipo.",
  "aggregate + $project — Proyecta nombre, precio y convierte el precio a entero con $toInt.",
  "aggregate + $avg — Filtra propiedades con \u226510 rese\u00f1as y calcula el puntaje promedio de calificaci\u00f3n.",
];
const evidencias: Evidencia[] = [
  // ── MongoDB ejercicios (26) · 11/05/2026 ──
  ...[
    "1_Ejercicio.mongodb.js",
    "2_Ejercicio.mongodb.js",
    "3_Ejercicio.mongodb.js",
    "4_Ejercicio.mongodb.js",
    "5_Ejercicio.mongodb.js",
    "6_Ejercicio.mongodb.js",
    "7_Ejercicio.mongodb.js",
    "8_Ejercicio.mongodb.js",
    "9_Ejercicio.mongodb.js",
    "10_Ejercicio.mongodb.js",
    "11_Ejercicio.mongodb.js",
    "12_Ejercicio.mongodb.js",
    "13_Ejercicio.mongodb.js",
    "14_Ejercicio.mongodb.js",
    "15_Ejercicio.mongodb.js",
    "16_Ejercicio.mongodb.js",
    "17_Ejercicio.mongodb.js",
    "18_Ejercicio.mongodb.js",
    "19_Ejercicio.mongodb.js",
    "20_Ejercicio.mongodb.js",
    "21_Ejercicio.mongodb.js",
    "22_Ejercicio.mongodb.js",
    "23_Ejercicio.mongodb.js",
    "24_Ejercicio.mongodb.js",
    "25_Ejercicio.mongodb.js",
    "26_Ejercicio.mongodb.js",
  ].map((f, i) => ({
    nombre: f,
    fecha: "11/05/2026",
    descripcion: descsMongo[i],
    rawUrl: `${BASE}/Directorio%20MQL/${f}`,
  })),
  // ── PL/SQL scripts ──
  {
    nombre: "TALLER2_TERMINADO.sql",
    fecha: "17/04/2026",
    descripcion:
      "Taller 2 — PL/SQL completo. Taller aplicado en pareja. Incluye bloques an\u00f3nimos, liquidaci\u00f3n de empleados y l\u00f3gica PL/SQL avanzada.",
    rawUrl: `${BASE}/TALLER2_TERMINADO.sql`,
  },
  {
    nombre: "taller1_v2.sql",
    fecha: "10/04/2026",
    descripcion:
      "Taller 1 — SQL Avanzado y Transacciones. Taller aplicado en pareja (variante 2). Abarca SQL avanzado y propiedades ACID.",
    rawUrl: `${BASE}/taller1_v2.sql`,
  },
  {
    nombre: "Script Sin\u00f3nimos, 27-03-2026.sql",
    fecha: "27/03/2026",
    descripcion:
      "Sin\u00f3nimos p\u00fablicos y privados. Crea sin\u00f3nimos p\u00fablicos para las tablas del esquema SAMESA simplificando el acceso.",
    rawUrl: `${BASE}/Script%20Sin%C3%B3nimos%2C%2027-03-2026.sql`,
  },
  {
    nombre: "Script secuencias, 27-03-2026.sql",
    fecha: "27/03/2026",
    descripcion:
      "Secuencias en Oracle. Crea la secuencia SEQ_NUMERO_PLANTA y la tabla PLANTAS, insertando registros masivos con un ciclo FOR usando NEXTVAL.",
    rawUrl: `${BASE}/Script%20secuencias%2C%2027-03-2026.sql`,
  },
  {
    nombre: "Script trigger.sql",
    fecha: "09/03/2026",
    descripcion:
      "Triggers — Auditor\u00eda de salarios. Crea un trigger TR_SALARIO_80 que registra en tabla de auditor\u00eda cada cambio de salario en empleados del departamento 80.",
    rawUrl: `${BASE}/Script%20trigger.sql`,
  },
  {
    nombre: "Script 3, 02-03-2026.sql",
    fecha: "02/03/2026",
    descripcion:
      "N\u00f3mina de febrero con cursores. Procedimiento SP_NOMINA que usa cursor para calcular y mostrar el total a pagar de cada empleado.",
    rawUrl: `${BASE}/Script%203%2C%2002-03-2026.sql`,
  },
  {
    nombre: "Script 2, 02-03-2026.sql",
    fecha: "02/03/2026",
    descripcion:
      "Cursor con par\u00e1metro de departamento. Cursor expl\u00edcito parametrizado que filtra empleados por department_id.",
    rawUrl: `${BASE}/Script%202%2C%2002-03-2026.sql`,
  },
  {
    nombre: "Script 1, 02-03-2026.sql",
    fecha: "02/03/2026",
    descripcion:
      "Cursores expl\u00edcitos — Empleados. Uso de cursores expl\u00edcitos para recorrer la tabla employees.",
    rawUrl: `${BASE}/Script%201%2C%2002-03-2026.sql`,
  },
  {
    nombre: "Script2, 23-02-2026.sql",
    fecha: "23/02/2026",
    descripcion:
      "Fibonacci con par\u00e1metros de rango. Extiende SP_FIBONACCI para aceptar par\u00e1metro inicial y final.",
    rawUrl: `${BASE}/Script2%2C%2023-02-2026.sql`,
  },
  {
    nombre: "Clase 23-02-2026.sql",
    fecha: "23/02/2026",
    descripcion:
      "Procedimiento Serie Fibonacci. Crea el procedimiento SP_FIBONACCI que genera la serie de Fibonacci usando un bucle WHILE.",
    rawUrl: `${BASE}/Clase%2023-02-2026.sql`,
  },
  {
    nombre: "SP_PrimerEjemplo.sql",
    fecha: "16/02/2026",
    descripcion:
      "Primer procedimiento almacenado. Procedimiento b\u00e1sico SP_EJEMPLO que recibe un par\u00e1metro de texto y lo imprime por consola.",
    rawUrl: `${BASE}/SP_PrimerEjemplo.sql`,
  },
  {
    nombre: "Script4, 16-02-2026.sql",
    fecha: "16/02/2026",
    descripcion:
      "Procedimiento sp_actualizaPais. Procedimiento almacenado que recibe un c\u00f3digo y nombre, y actualiza el nombre del pa\u00eds a min\u00fasculas.",
    rawUrl: `${BASE}/Script4%2C%2016-02-2026.sql`,
  },
  {
    nombre: "Script3, 16-02-2026.sql",
    fecha: "16/02/2026",
    descripcion:
      "Pa\u00eds con m\u00e1s equipos. Bloque PL/SQL que imprime en consola el nombre del pa\u00eds que tiene m\u00e1s equipos en la base de datos.",
    rawUrl: `${BASE}/Script3%2C%2016-02-2026.sql`,
  },
  {
    nombre: "Script2, 16-02-2026.sql",
    fecha: "16/02/2026",
    descripcion:
      "Tabla de equipos de f\u00fatbol. Crea la tabla EQUIPO e inserta 23 equipos internacionales relacionados con su pa\u00eds.",
    rawUrl: `${BASE}/Script2%2C%2016-02-2026.sql`,
  },
  {
    nombre: "Script1, 16-02-2026.sql",
    fecha: "16/02/2026",
    descripcion:
      "Tabla de pa\u00edses del mundo. Crea la tabla PAIS e inserta los 198 pa\u00edses del mundo con su c\u00f3digo y nombre.",
    rawUrl: `${BASE}/Script1%2C%2016-02-2026.sql`,
  },
  {
    nombre: "Script BEGIN, 13-02-2026.txt",
    fecha: "13/02/2026",
    descripcion:
      "Introducci\u00f3n a DECLARE y BEGIN. Primer acercamiento a bloques PL/SQL. Declara variables tipadas (%TYPE) y consulta datos de un empleado.",
    rawUrl: `${BASE}/Script%20BEGIN%2C%2013-02-2026.txt`,
  },
];
export default function EvidenciasSection() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [code, setCode] = useState<Record<number, string | null>>({});
  const [loading, setLoading] = useState<Record<number, boolean>>({});
  const loadCode = async (i: number, url: string) => {
    if (code[i] !== undefined) {
      setCode((prev) => ({ ...prev, [i]: code[i] ? null : code[i] }));
      return;
    }
    setLoading((prev) => ({ ...prev, [i]: true }));
    try {
      const res = await fetch(url);
      const text = await res.text();
      setCode((prev) => ({ ...prev, [i]: text }));
    } catch {
      setCode((prev) => ({ ...prev, [i]: "// Error al cargar el c\u00f3digo" }));
    } finally {
      setLoading((prev) => ({ ...prev, [i]: false }));
    }
  };
  return (
    <div className="evidencias-wrapper">
      <button
        className="evidencias-toggle"
        onClick={() => setPanelOpen((p) => !p)}
      >
        <span className="evidencia-icon">◈</span>
        <span className="evidencia-label">
          Evidencias (SQL | PL/SQL Scripts | NoSQL | Proyecto)
        </span>
        <svg
          className={`evidencia-chevron ${panelOpen ? "open" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          width="24"
          height="24"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={`evidencias-panel ${panelOpen ? "open" : ""}`}>
        <div className="evidencias-grid">
          {evidencias.map((ev, i) => (
            <div key={i} className="evidencia-card">
              <div className="evidencia-card-accent" />
              <div className="evidencia-card-body">
                <div className="evidencia-card-header">
                  <h3 className="evidencia-card-nombre">{ev.nombre}</h3>
                  <span className="evidencia-card-fecha">{ev.fecha}</span>
                </div>
                <p className="evidencia-card-desc">{ev.descripcion}</p>
                <button
                  className="evidencia-code-btn"
                  onClick={() => loadCode(i, ev.rawUrl)}
                >
                  {loading[i]
                    ? "Cargando..."
                    : code[i]
                      ? "Ocultar c\u00f3digo"
                      : "Ver c\u00f3digo"}
                </button>
                {code[i] && (
                  <pre className="evidencia-code-block">
                    <code>{code[i]}</code>
                  </pre>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .evidencias-wrapper {
          margin-top: 0.75rem;
        }
        .evidencias-toggle {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          padding: 1.5rem 2rem;
          background-color: var(--ctp-surface0);
          border: 2px solid var(--ctp-peach);
          border-radius: 12px;
          color: var(--ctp-text);
          font-family: inherit;
          font-size: 1.25rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-align: left;
        }
        .evidencias-toggle::before {
          content: "";
          position: absolute;
          inset: -1px;
          background-color: var(--ctp-peach);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 0;
        }
        .evidencias-toggle:hover::before {
          transform: scaleX(1);
        }
        .evidencias-toggle:hover {
          transform: translateX(8px);
        }
        .evidencia-icon {
          font-size: 1.5rem;
          color: var(--ctp-peach);
          transition: all 0.3s ease;
          z-index: 1;
        }
        .evidencia-label {
          flex: 1;
          z-index: 1;
          transition: color 0.3s ease;
        }
        .evidencia-chevron {
          width: 24px;
          height: 24px;
          color: var(--ctp-peach);
          transition: all 0.3s ease;
          z-index: 1;
        }
        .evidencia-chevron.open {
          transform: rotate(180deg);
        }
        .evidencias-toggle:hover .evidencia-icon,
        .evidencias-toggle:hover .evidencia-chevron {
          color: var(--ctp-base);
        }
        .evidencias-toggle:hover .evidencia-label {
          color: var(--ctp-base);
        }
        .evidencias-panel {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s ease;
          margin-top: 1rem;
        }
        .evidencias-panel.open {
          grid-template-rows: 1fr;
        }
        .evidencias-grid {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .evidencia-card {
          display: flex;
          background-color: var(--ctp-mantle);
          border: 1px solid var(--ctp-surface1);
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .evidencia-card:hover {
          background-color: var(--ctp-surface0);
          transform: translateX(4px);
        }
        .evidencia-card-accent {
          width: 4px;
          flex-shrink: 0;
          background-color: var(--ctp-peach);
        }
        .evidencia-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding: 1rem 1.25rem;
          flex: 1;
          min-width: 0;
        }
        .evidencia-card-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .evidencia-card-nombre {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--ctp-text);
          font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
          word-break: break-all;
        }
        .evidencia-card-fecha {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--ctp-peach);
          white-space: nowrap;
        }
        .evidencia-card-desc {
          font-size: 0.875rem;
          color: var(--ctp-subtext0);
          line-height: 1.5;
        }
        .evidencia-code-btn {
          align-self: flex-start;
          margin-top: 0.25rem;
          padding: 0.4rem 1rem;
          font-size: 0.8rem;
          font-weight: 500;
          font-family: inherit;
          color: var(--ctp-text);
          background-color: var(--ctp-surface1);
          border: 1px solid var(--ctp-overlay0);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .evidencia-code-btn:hover {
          background-color: var(--ctp-surface2);
          border-color: var(--ctp-peach);
          color: var(--ctp-peach);
        }
        .evidencia-code-block {
          margin-top: 0.5rem;
          padding: 1rem;
          background-color: var(--ctp-crust);
          border: 1px solid var(--ctp-surface1);
          border-radius: 8px;
          overflow-x: auto;
          font-size: 0.8rem;
          line-height: 1.5;
          color: var(--ctp-text);
          font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
          max-height: 400px;
          overflow-y: auto;
          white-space: pre;
        }
        .evidencia-code-block code {
          background: none;
          padding: 0;
        }
        @media (max-width: 600px) {
          .evidencias-toggle {
            padding: 1.25rem 1.5rem;
            font-size: 1.1rem;
          }
          .evidencia-card-body {
            padding: 0.85rem 1rem;
          }
          .evidencia-card-nombre {
            font-size: 0.85rem;
          }
          .evidencia-code-block {
            font-size: 0.7rem;
            max-height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
