import { useState } from "react";
interface Evidencia {
  nombre: string;
  fecha: string;
  descripcion: string;
}
const evidencias: Evidencia[] = [
  {
    nombre: "26_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "aggregate + $avg — Filtra propiedades con \u226510 rese\u00f1as y calcula el puntaje promedio de calificaci\u00f3n.",
  },
  {
    nombre: "25_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "aggregate + $project — Proyecta nombre, precio y convierte el precio a entero con $toInt.",
  },
  {
    nombre: "24_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "aggregate + $group — Agrupa por tipo de propiedad y cuenta el total de listings por cada tipo.",
  },
  {
    nombre: "23_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "aggregate + $unwind — Descompone el array de amenidades y obtiene las 5 m\u00e1s frecuentes en toda la colecci\u00f3n.",
  },
  {
    nombre: "22_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "aggregate + $group — Agrupa por pa\u00eds y calcula el precio promedio, ordenado de mayor a menor.",
  },
  {
    nombre: "21_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "aggregate + $count — Cuenta cu\u00e1ntas propiedades tienen m\u00e1s de 10 amenidades usando $expr y $size.",
  },
  {
    nombre: "20_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "updateOne + upsert — Actualiza o inserta (\u201cMansi\u00f3n de Prueba\u201d) si no existe, usando la opci\u00f3n upsert: true.",
  },
  {
    nombre: "19_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "updateMany + $pull — Elimina \u201cCable TV\u201d de la lista de amenidades en todos los documentos que la tengan.",
  },
  {
    nombre: "18_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "updateMany + $inc — Incrementa en 1 el contador de rese\u00f1as de todas las propiedades en Espa\u00f1a.",
  },
  {
    nombre: "17_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "updateOne + $push — Actualiza resumen y agrega \u201cSmart TV\u201d a las amenidades de una caba\u00f1a.",
  },
  {
    nombre: "16_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "updateOne + $set — Actualiza el tipo de propiedad de \u201cCozy Cabin Retreat\u201d.",
  },
  {
    nombre: "15_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "find nulos — Encuentra propiedades sin last_review, ordenadas por n\u00famero de rese\u00f1as.",
  },
  {
    nombre: "14_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "find + sort + limit — Lista las 10 propiedades m\u00e1s caras ordenadas por precio descendente.",
  },
  {
    nombre: "13_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "find + $size — Busca propiedades con exactamente 20 amenidades.",
  },
  {
    nombre: "12_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "find en array — Filtra propiedades que tienen \u201cHeating\u201d en su lista de amenidades.",
  },
  {
    nombre: "11_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "find + $regex — Busca propiedades cuyo nombre contiene \u201cLuxury\u201d (insensible a may\u00fasculas).",
  },
  {
    nombre: "10_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "find + $in — Busca propiedades de tipo \u201cHouse\u201d o \u201cCondominium\u201d con $in.",
  },
  {
    nombre: "9_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "find + $and — Filtra apartamentos en el mercado de Nueva York con $and.",
  },
  {
    nombre: "8_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "find + $lt — Busca propiedades con precio menor a $75.",
  },
  {
    nombre: "7_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "find + $gt — Filtra propiedades con m\u00e1s de 5 camas.",
  },
  {
    nombre: "6_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "find + filtro — Busca propiedades en Brasil mostrando nombre y precio.",
  },
  {
    nombre: "5_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "Error duplicado — Variaci\u00f3n del ejercicio anterior con mismo escenario de duplicado.",
  },
  {
    nombre: "4_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "Error duplicado — Intenta insertar un _id ya existente para observar el error de clave duplicada.",
  },
  {
    nombre: "3_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "insertMany — Inserta m\u00faltiples documentos en una sola operaci\u00f3n.",
  },
  {
    nombre: "2_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "insertOne — Inserta un loft con direcci\u00f3n anidada (pa\u00eds y mercado).",
  },
  {
    nombre: "1_Ejercicio_mongodb.js",
    fecha: "11/05/2026",
    descripcion:
      "insertOne — Inserta una caba\u00f1a (\u201cCozy Cabin Retreat\u201d) con tipo y precio.",
  },
  {
    nombre: "TALLER2_TERMINADO.sql",
    fecha: "17/04/2026",
    descripcion:
      "Taller 2 — PL/SQL completo. Taller aplicado en pareja. Incluye bloques an\u00f3nimos, liquidaci\u00f3n de empleados y l\u00f3gica PL/SQL avanzada.",
  },
  {
    nombre: "taller1_v2.sql",
    fecha: "10/04/2026",
    descripcion:
      "Taller 1 — SQL Avanzado y Transacciones. Taller aplicado en pareja (variante 2). Abarca SQL avanzado y propiedades ACID. Tag de ejecuci\u00f3n: P01_FINAL.",
  },
  {
    nombre: "Script_Sin\u00f3nimos__27-03-2026.sql",
    fecha: "27/03/2026",
    descripcion:
      "Sin\u00f3nimos p\u00fablicos y privados. Crea sin\u00f3nimos p\u00fablicos para las tablas del esquema SAMESA (EMPLOYEES, JOBS, REGIONS, etc.) simplificando el acceso.",
  },
  {
    nombre: "Script_secuencias__27-03-2026.sql",
    fecha: "27/03/2026",
    descripcion:
      "Secuencias en Oracle. Crea la secuencia SEQ_NUMERO_PLANTA y la tabla PLANTAS, insertando registros masivos con un ciclo FOR usando NEXTVAL.",
  },
  {
    nombre: "Script_trigger.sql",
    fecha: "09/03/2026",
    descripcion:
      "Triggers — Auditor\u00eda de salarios. Crea un trigger TR_SALARIO_80 que registra en tabla de auditor\u00eda cada cambio de salario en empleados del departamento 80.",
  },
  {
    nombre: "Script_3__02-03-2026.sql",
    fecha: "02/03/2026",
    descripcion:
      "N\u00f3mina de febrero con cursores. Procedimiento SP_NOMINA que usa cursor para calcular y mostrar el total a pagar de cada empleado incluyendo comisi\u00f3n y descuento.",
  },
  {
    nombre: "Script_2__02-03-2026.sql",
    fecha: "02/03/2026",
    descripcion:
      "Cursor con par\u00e1metro de departamento. Cursor expl\u00edcito parametrizado que filtra empleados por department_id usando un par\u00e1metro con valor por defecto 80.",
  },
  {
    nombre: "Script_1__02-03-2026.sql",
    fecha: "02/03/2026",
    descripcion:
      "Cursores expl\u00edcitos — Empleados. Uso de cursores expl\u00edcitos para recorrer la tabla employees, primero todos y luego filtrados por departamento 80.",
  },
  {
    nombre: "Script2__23-02-2026.sql",
    fecha: "23/02/2026",
    descripcion:
      "Fibonacci con par\u00e1metros de rango. Extiende SP_FIBONACCI para aceptar par\u00e1metro inicial y final, mostrando solo los n\u00fameros dentro del rango.",
  },
  {
    nombre: "Clase_23-02-2026.sql",
    fecha: "23/02/2026",
    descripcion:
      "Procedimiento Serie Fibonacci. Crea el procedimiento SP_FIBONACCI que genera la serie de Fibonacci usando un bucle WHILE.",
  },
  {
    nombre: "SP_PrimerEjemplo.sql",
    fecha: "16/02/2026",
    descripcion:
      "Primer procedimiento almacenado. Procedimiento b\u00e1sico SP_EJEMPLO que recibe un par\u00e1metro de texto y lo imprime por consola.",
  },
  {
    nombre: "Script4__16-02-2026.sql",
    fecha: "16/02/2026",
    descripcion:
      "Procedimiento sp_actualizaPais. Procedimiento almacenado que recibe un c\u00f3digo y nombre, y actualiza el nombre del pa\u00eds a min\u00fasculas.",
  },
  {
    nombre: "Script3__16-02-2026.sql",
    fecha: "16/02/2026",
    descripcion:
      "Pa\u00eds con m\u00e1s equipos. Bloque PL/SQL que imprime en consola el nombre del pa\u00eds que tiene m\u00e1s equipos en la base de datos.",
  },
  {
    nombre: "Script2__16-02-2026.sql",
    fecha: "16/02/2026",
    descripcion:
      "Tabla de equipos de f\u00fatbol. Crea la tabla EQUIPO e inserta 23 equipos internacionales relacionados con su pa\u00eds.",
  },
  {
    nombre: "Script1__16-02-2026.sql",
    fecha: "16/02/2026",
    descripcion:
      "Tabla de pa\u00edses del mundo. Crea la tabla PAIS e inserta los 198 pa\u00edses del mundo con su c\u00f3digo y nombre.",
  },
  {
    nombre: "1Script_BEGIN__13-02-2026.txt",
    fecha: "13/02/2026",
    descripcion:
      "Introducci\u00f3n a DECLARE y BEGIN. Primer acercamiento a bloques PL/SQL. Declara variables tipadas (%TYPE) y consulta datos de un empleado con SELECT INTO y DBMS_OUTPUT.",
  },
];
export default function EvidenciasSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="evidencias-wrapper">
      <button
        className="evidencias-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="evidencia-icon">◈</span>
        <span className="evidencia-label">
          Evidencias (SQL | PL/SQL Scripts | NoSQL | Proyecto)
        </span>
        <svg
          className={`evidencia-chevron ${isOpen ? "open" : ""}`}
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
      <div className={`evidencias-panel ${isOpen ? "open" : ""}`}>
        <div className="evidencias-grid">
          {evidencias.map((ev, i) => (
            <div key={i} className="evidencia-card">
              <div className="evidencia-card-accent" />
              <div className="evidencia-card-body">
                <h3 className="evidencia-card-nombre">{ev.nombre}</h3>
                <span className="evidencia-card-fecha">{ev.fecha}</span>
                <p className="evidencia-card-desc">{ev.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .evidencias-wrapper {
          margin-top: 1.5rem;
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
          gap: 0.25rem;
          padding: 1rem 1.25rem;
          flex: 1;
          min-width: 0;
        }
        .evidencia-card-nombre {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--ctp-text);
          font-family:
            "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
          word-break: break-all;
        }
        .evidencia-card-fecha {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--ctp-peach);
          letter-spacing: 0.02em;
        }
        .evidencia-card-desc {
          font-size: 0.875rem;
          color: var(--ctp-subtext0);
          line-height: 1.5;
          margin-top: 0.15rem;
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
        }
      `}</style>
    </div>
  );
}
