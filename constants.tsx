
import React from 'react';

// --- Icon Components ---

const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v1.5M12 17.747v-1.5M17.747 12h-1.5M6.253 12h1.5M15.536 8.464l-1.06-1.06M8.464 15.536l-1.06-1.06M15.536 15.536l-1.06 1.06M8.464 8.464l-1.06 1.06M12 12a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const RoadmapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const KpiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
);

const ResourcesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const RiskIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

// --- Type Definition ---

export interface ModalDataType {
    title: string;
    icon: React.ReactNode;
    details: string[];
    subtitle?: string;
    timeframe?: string | string[];
}

// --- Presentation Data ---

export const presentationData = {
    title: "Modelo de Gestión Integral",
    subtitle: "Documento base para presentación a Gerencia General",
    vision: "Construir un sistema operativo empresarial que integra datos, tecnología, personas y procesos, generando valor medible y sostenible.",
    
    strategicObjectives: {
        title: "Objetivos Estratégicos",
        items: [
            {
                title: "Corto Plazo: Fundación y Valor Temprano",
                timeframe: "corto",
                subtitle: "0-6 meses",
                icon: <TargetIcon />,
                details: [
                    "**Implementación del Modelo Base:** Crearemos la primera versión de nuestro 'cerebro' operativo. Esto implica definir y estandarizar los procesos clave iniciales y las herramientas que nos darán una visión unificada de la operación, sentando las bases para todo lo demás. **Avance actual:** Se ha logrado la homologación y estandarización del flujo de implementación de paneles BI, asegurando entregables de calidad. Los dashboards de clientes (Arcor, BDF - Nivea, BDF - Eucerin, Vspt, Andina / Embonor, Durandin, Unilever, Softys) han sido actualizados y estandarizados, estableciendo el modelo base para futuras implementaciones.",
                    "**Diagnóstico Operativo y Tecnológico:** Realizaremos un 'chequeo médico' completo a áreas críticas (ej. Ventas, Soporte). Mapearemos sus procesos actuales para identificar cuellos de botella, tareas manuales que roban tiempo y sistemas que no se comunican entre sí. El resultado será un mapa claro de los 'dolores' a resolver. **Avance actual:** Se ha iniciado el levantamiento de todos los procesos clave de la empresa, comenzando por el área de Reclutamiento y Selección. Actualmente se está redefiniendo el proceso de solicitud de vacantes y monitoreo de datos tanto para RRLL (Relaciones Laborales) como Selección, identificando puntos de mejora y optimización.",
                    "**Establecimiento de KPIs y Tablero Ejecutivo:** Definiremos los 5-7 indicadores vitales que nos dirán la 'salud' del negocio en tiempo real. Crearemos un tablero de control para la gerencia que muestre estos datos de forma simple y visual, permitiendo tomar decisiones basadas en información actualizada, no en intuición. **Avance actual:** El panel interno de control para el 'servicio de confección' está 100% completo con funcionalidades clave de visión raw de Asistencia y Cobertura, identificación de usuarios con problemas de marca, análisis de asistencia, detalles para gestión y filtros avanzados. El panel cliente nuevo muestra 70% de progreso, enfocado en usabilidad y nuevos KPIs que permitirán una mejor toma de decisiones.",
                    "**Quick Wins en Automatización:** Identificaremos y automatizaremos tareas repetitivas de bajo esfuerzo y alto impacto. Por ejemplo, la generación automática de un reporte que hoy toma 4 horas. Estas 'victorias tempranas' demostrarán el valor del proyecto y generarán confianza en los equipos. **Avances actuales:** • Se ha probado exitosamente el prototipo de 'Selection Analyst' con IA, listo para implementación y expansión a roles como Billing Analyst y Biometrics Analyst. • Se ha iniciado el proyecto de Supervisor Virtual para automatizar tareas de supervisión de campo. • El Portal de Clientes primera versión está liberada para hacer documentos disponibles de forma segura. • La migración de Geovictoria de Excel a API alcanza 70% de progreso, mejorando la eficiencia en el control de tiempo y cobertura."
                ]
            },
            {
                title: "Mediano Plazo: Consolidación y Escalamiento",
                timeframe: "mediano",
                subtitle: "6-18 meses",
                icon: <TargetIcon />,
                details: [
                    "**Consolidación del Modelo de Gestión:** El modelo base dejará de ser una iniciativa para convertirse en 'la forma en que trabajamos'. Refinaremos los procesos iniciales y expandiremos el modelo a más áreas de la compañía, basándonos en los aprendizajes de la primera fase.",
                    "**Escalamiento de Automatizaciones:** Pasaremos de automatizaciones simples a flujos de trabajo más complejos que conecten diferentes departamentos. Por ejemplo, automatizar todo el proceso desde que un cliente es captado por marketing hasta que es facturado por finanzas.",
                    "**Maduración del Sistema de Data:** Nuestro sistema de datos evolucionará para no solo mostrar 'qué pasó', sino empezar a predecir 'qué podría pasar'. Integraremos más fuentes de datos para obtener una inteligencia operacional más rica y proactiva.",
                    "**Capacitación y Adopción Masiva:** Lanzaremos un programa de capacitación a gran escala para asegurar que todos los colaboradores no solo sepan usar las nuevas herramientas, sino que entiendan cómo contribuyen a los objetivos de la empresa. Mediremos activamente la adopción y ofreceremos soporte continuo.",
                ]
            },
            {
                title: "Largo Plazo: Innovación y Liderazgo",
                timeframe: "largo",
                subtitle: "18-36 meses",
                icon: <TargetIcon />,
                details: [
                    "**Cultura Digital y Operativa Consolidada:** La mejora continua y la toma de decisiones basada en datos será parte del ADN de cada colaborador. La eficiencia y la innovación no dependerán de un equipo central, sino que surgirán de toda la organización.",
                    "**Ecosistema Tecnológico Escalable:** Tendremos una arquitectura de sistemas robusta, flexible y auto-sustentable, que nos permita integrar nuevas tecnologías rápidamente y adaptarnos a las futuras necesidades del negocio sin grandes traumas ni proyectos faraónicos.",
                    "**Generación de Nuevas Líneas de Valor:** Usaremos nuestra eficiencia operativa y el conocimiento profundo de nuestros datos para crear nuevos productos o servicios. Por ejemplo, podríamos empaquetar y vender a otras empresas una de nuestras soluciones de software interno.",
                    "**Innovación Continua y Permanente:** Estableceremos un modelo formal para la innovación, con presupuesto y equipos dedicados a explorar nuevas tecnologías y modelos de negocio, asegurando que la empresa no solo sea eficiente hoy, sino también relevante mañana.",
                ]
            }
        ]
    },

    capabilitiesRoadmap: {
        title: "Roadmap de Capacidades",
        items: [
            {
                title: "Capacidades a Desarrollar (Corto Plazo)",
                timeframe: "corto",
                subtitle: "Fundamentos",
                icon: <RoadmapIcon />,
                details: [
                    "**Levantamiento de Procesos:** Mapearemos visualmente los flujos de trabajo más importantes para entenderlos de inicio a fin. Esto nos dará un 'plano' de la operación actual, revelando pasos innecesarios, duplicidades y puntos de fricción. **Avance actual:** El levantamiento ha iniciado con Reclutamiento y Selección, áreas críticas que impactan directamente en la operación. Se está redefiniendo el proceso completo de solicitud de vacantes y monitoreo de datos, tanto para el área de RRLL (Relaciones Laborales) como Selección. Se desarrollará un plan de trabajo con Calidad para documentar procesos críticos de manera estructurada, estableciendo la metodología que se replicará en otras áreas.",
                    "**Implementación de Métricas Core:** Activaremos la recolección de datos para los KPIs definidos. Esto significa conectar nuestros sistemas a un tablero central para tener visibilidad inmediata sobre el rendimiento operativo. **Avance actual:** Se ha estandarizado el flujo de implementación de paneles BI, asegurando que todos los dashboards sigan el mismo modelo y calidad. Los paneles de Flow (servicio de confección) están operativos con métricas clave de Asistencia, Cobertura y análisis de usuarios, permitiendo visibilidad inmediata del rendimiento operativo.",
                    "**Automatización de Procesos Repetitivos:** Usaremos herramientas de software (RPA) para que 'robots' hagan las tareas manuales y predecibles, como copiar y pegar datos entre sistemas. Esto liberará a nuestro personal para trabajos más estratégicos. **Avances actuales:** • Se ha probado exitosamente el prototipo de IA 'Selection Analyst' que automatiza tareas de análisis en selección. • Se ha iniciado el proyecto de Supervisor Virtual para automatizar tareas de supervisión de campo. • La migración de Geovictoria de Excel a API (70% completa) eliminará tareas manuales de conexión de datos, automatizando el flujo de información.",
                    "**Tablero Ejecutivo Estandarizado:** Construiremos el primer tablero de control unificado para la gerencia, asegurando que todos los líderes vean los mismos datos, presentados de la misma manera, para una toma de decisiones más alineada y coherente. **Avance actual:** Se ha logrado la estandarización de paneles BI para múltiples clientes (Arcor, BDF - Nivea, BDF - Eucerin, Vspt, Andina / Embonor, Durandin, Unilever, Softys), estableciendo un formato unificado que facilita la comparación y análisis. Los paneles Flow están operativos con métricas estandarizadas, sentando las bases para el tablero ejecutivo unificado."
                ]
            },
            {
                title: "Capacidades a Desarrollar (Mediano Plazo)",
                timeframe: "mediano",
                subtitle: "Consolidación",
                icon: <RoadmapIcon />,
                details: [
                    "**Integraciones Tecnológicas Clave:** Haremos que nuestros sistemas más importantes (como el CRM y el sistema de facturación) 'hablen' entre sí automáticamente. Esto eliminará la necesidad de cargar datos manualmente y asegurará que la información sea consistente en toda la empresa.",
                    "**Expansión de Flujos Automatizados:** Conectaremos las automatizaciones individuales para crear cadenas de procesos que funcionen sin intervención humana, abarcando múltiples departamentos y reduciendo drámicamente los tiempos de ciclo.",
                    "**Catálogo de Soluciones Digitales:** Crearemos un 'mercado de aplicaciones' interno, donde los equipos puedan encontrar y solicitar soluciones pre-aprobadas (como formularios digitales, flujos de aprobación, etc.) para resolver sus problemas operativos de forma rápida y estandarizada.",
                    "**Monitoreo en Tiempo Real con IA y BI:** Nuestros tableros de control se volverán más inteligentes. Usaremos IA para que el sistema no solo muestre datos, sino que también detecte anomalías, identifique tendencias y envíe alertas proactivas a los responsables."
                ]
            },
            {
                title: "Capacidades a Desarrollar (Largo Plazo)",
                timeframe: "largo",
                subtitle: "Innovación",
                icon: <RoadmapIcon />,
                details: [
                    "**Optimización Basada en Datos y Predictibilidad:** Utilizaremos el histórico de datos acumulado para predecir resultados futuros. Por ejemplo, podremos prever la carga de trabajo del equipo de soporte para la próxima semana y ajustar los recursos de manera proactiva.",
                    "**Portafolio Comercial de Capacidades:** Analizaremos nuestras soluciones internas más exitosas y evaluaremos la posibilidad de adaptarlas y venderlas a clientes externos, creando una nueva fuente de ingresos basada en nuestra propia eficiencia.",
                    "**Creación de Nuevos Productos Digitales:** Fomentaremos la creación de nuevos productos y servicios que nazcan directamente de nuestras capacidades tecnológicas y de datos, respondiendo a necesidades del mercado que antes no podíamos abordar.",
                    "**Auditoría Continua y Cultura de Mejora:** La optimización de procesos dejará de ser un proyecto para convertirse en una actividad constante. Implementaremos sistemas que auditen continuamente nuestros flujos de trabajo en busca de nuevas oportunidades de mejora."
                ]
            }
        ]
    },

    kpis: {
        title: "Indicadores de Éxito (KPIs)",
        items: [
            { title: "Digitalización y Automatización", icon: <KpiIcon />, timeframe: ['corto', 'mediano'], details: ["**Qué medimos:** El porcentaje de procesos críticos (ej: alta de clientes) que dejan de depender de planillas y correos para pasar a sistemas controlados.", "**Por qué es importante:** Reduce errores humanos, acelera la operación y libera a nuestro personal para que se enfoque en tareas de mayor valor, no en trabajo repetitivo.", "**Ejemplos de avance actual:** • La migración de Geovictoria de Excel a API (70% completa) está eliminando la dependencia de planillas manuales. • El prototipo de 'Selection Analyst' con IA automatiza tareas de análisis que antes requerían trabajo manual. • El proyecto de Supervisor Virtual está diseñado para automatizar tareas de supervisión de campo, reduciendo la dependencia de procesos manuales."] },
            { title: "Adopción Tecnológica", icon: <KpiIcon />, timeframe: ['corto', 'mediano'], details: ["**Qué medimos:** El porcentaje de colaboradores que utilizan activamente las nuevas herramientas en su día a día.", "**Por qué es importante:** Una herramienta, por muy buena que sea, no genera valor si nadie la usa. Este KPI nos dice si estamos gestionando bien el cambio y si las soluciones son realmente útiles para la gente.", "**Ejemplos de avance actual:** • Los paneles BI estandarizados para 8 clientes (Arcor, BDF - Nivea, BDF - Eucerin, Vspt, Andina / Embonor, Durandin, Unilever, Softys) están listos para uso y feedback, permitiendo medir la adopción real. • El panel interno de Flow (100% completo) está operativo con funcionalidades que los usuarios pueden adoptar inmediatamente. • El Portal de Clientes primera versión está disponible, permitiendo medir la adopción desde el inicio."] },
            { title: "Productividad", icon: <KpiIcon />, timeframe: ['corto', 'mediano', 'largo'], details: ["**Qué medimos:** La reducción de horas-hombre dedicadas a tareas que ahora están automatizadas o simplificadas.", "**Por qué es importante:** Es la medida directa de la eficiencia ganada. Nos permite cuantificar el tiempo y los recursos que estamos ahorrando y reinvirtiendo en crecimiento.", "**Ejemplos de avance actual:** • El 'Selection Analyst' con IA está diseñado para reducir significativamente el tiempo de análisis en selección. • La migración de Geovictoria a API eliminará tareas manuales de conexión de datos. • El Supervisor Virtual automatizará tareas de campo que antes requerían desplazamientos y tiempo manual. • Los paneles Flow con análisis automatizado reducen el tiempo de generación de reportes."] },
            { title: "Tiempos de Respuesta", icon: <KpiIcon />, timeframe: ['corto', 'mediano'], details: ["**Qué medimos:** El tiempo promedio que tardamos en completar un proceso clave (ej: desde que un cliente pide una cotización hasta que la recibe).", "**Por qué es importante:** La velocidad es una ventaja competitiva clave. Reducir estos tiempos mejora directamente la satisfacción del cliente y la agilidad del negocio.", "**Ejemplos de avance actual:** • Los paneles BI estandarizados permiten acceso inmediato a información clave, reduciendo tiempos de búsqueda y análisis. • El panel Flow con métricas en tiempo real mejora la velocidad de respuesta en el servicio de confección. • El Portal de Clientes permite acceso inmediato a documentos, reduciendo tiempos de espera. • La migración a API de Geovictoria mejorará los tiempos de actualización de datos."] },
            { title: "Satisfacción (NPS)", icon: <KpiIcon />, timeframe: ['mediano', 'largo'], details: ["**Qué medimos:** A través de encuestas (Net Promoter Score), mediremos cómo se sienten nuestros empleados con sus herramientas de trabajo y cómo perciben nuestros clientes la agilidad de nuestro servicio.", "**Por qué es importante:** Un empleado feliz y con buenas herramientas da un mejor servicio a un cliente, que a su vez estará más satisfecho. Mide el impacto humano de la transformación."] },
            { title: "Reducción de Costos", icon: <KpiIcon />, timeframe: ['mediano', 'largo'], details: ["**Qué medimos:** El ahorro económico directo generado por la eliminación de licencias de software innecesarias, la reducción de errores costosos y la optimización general de los procesos.", "**Por qué es importante:** Cuantifica el retorno de la inversión (ROI) del proyecto en términos financieros claros y directos."] },
            { title: "Nuevas Líneas de Valor", icon: <KpiIcon />, timeframe: ['largo'], details: ["**Qué medimos:** El número de nuevas oportunidades de negocio o servicios que surgen gracias a nuestras nuevas capacidades, y los ingresos que generan.", "**Por qué es importante:** Demuestra que este proyecto no solo trata de ahorrar costos, sino de generar nuevo crecimiento y transformar la empresa para el futuro."] }
        ]
    },

    resources: {
        title: "Recursos y Capacidades Clave",
        items: [
            { title: "Equipo Núcleo", icon: <ResourcesIcon />, timeframe: ['corto'], details: ["**Qué es:** Un equipo pequeño y ágil con expertos en Operaciones, Datos (BI), Tecnología y Experiencia de Usuario (UX).", "**Su misión:** Ser el motor de este cambio, dedicados a diseñar, implementar y medir el impacto de cada mejora, asegurando que las soluciones no solo funcionen, sino que también sean fáciles de usar."] },
            { title: "Plataforma de Datos", icon: <ResourcesIcon />, timeframe: ['corto', 'mediano'], details: ["**Qué es:** Un 'lago de datos' centralizado donde toda la información de la empresa se almacena de forma ordenada y accesible.", "**Su misión:** Romper los silos de información. Permitirá que cualquier área pueda acceder a datos confiables para tomar mejores decisiones sin tener que pedir permiso o esperar reportes manuales."] },
            { title: "IA + Automatización", icon: <ResourcesIcon />, timeframe: ['corto', 'mediano', 'largo'], details: ["**Qué es:** Un conjunto de herramientas de software especializadas en automatización (RPA, BPM) y modelos de Inteligencia Artificial.", "**Su misión:** Ser la 'caja de herramientas' que el Equipo Núcleo usará para construir las soluciones, desde simples automatizaciones hasta asistentes virtuales más complejos."] },
            { title: "Gestión del Cambio", icon: <ResourcesIcon />, timeframe: ['corto', 'mediano'], details: ["**Qué es:** Un programa estructurado de comunicación, capacitación y soporte.", "**Su misión:** Asegurar que los empleados entiendan, acepten y adopten los nuevos procesos y tecnologías. Es el componente humano que garantiza que el cambio sea exitoso y sostenible."] },
            { title: "Patrocinio Ejecutivo", icon: <ResourcesIcon />, timeframe: ['corto', 'mediano', 'largo'], details: ["**Qué es:** El apoyo visible y constante de la Gerencia General.", "**Su misión:** Desbloquear obstáculos, asegurar los recursos necesarios y comunicar la importancia estratégica de la iniciativa a toda la organización, dando la señal clara de que este es un proyecto prioritario para la empresa."] },
            { title: "Biblioteca de Procesos", icon: <ResourcesIcon />, timeframe: ['mediano', 'largo'], details: ["**Qué es:** Una plataforma digital (como una wiki interna) donde se documentan todos los procesos de la empresa de forma clara y visual.", "**Su misión:** Ser la 'única fuente de la verdad' sobre cómo se deben hacer las cosas. Facilita la capacitación de nuevos empleados y garantiza la consistencia y calidad en la operación."] }
        ]
    },

    risks: {
        title: "Riesgos y Mitigaciones",
        items: [
            { title: "Resistencia al Cambio", icon: <RiskIcon />, timeframe: ['corto', 'mediano'], details: ["**El Riesgo:** Los equipos pueden ver las nuevas herramientas como una amenaza o una carga de trabajo adicional, prefiriendo seguir con los métodos conocidos aunque sean ineficientes.", "Mitigación: **Comunicación y Victorias Tempranas:** Lanzaremos una campaña explicando el 'porqué' del cambio y cómo beneficiará a cada rol. Celebraremos públicamente las primeras mejoras ('quick wins') para demostrar el valor real y generar confianza.", "Mitigación: **Co-creación:** En lugar de imponer soluciones, realizaremos talleres con los usuarios finales para diseñar los nuevos procesos juntos. Si ellos son parte de la creación, la adopción será natural.", "**Contexto actual:** • El levantamiento de procesos en Reclutamiento y Selección se está realizando en conjunto con las áreas involucradas (RRLL y Selección), aplicando el principio de co-creación. • Los paneles BI estandarizados para múltiples clientes están listos para feedback, permitiendo ajustes basados en la experiencia real de uso antes del despliegue masivo."] },
            { title: "Falta de Adopción", icon: <RiskIcon />, timeframe: ['corto', 'mediano'], details: ["**El Riesgo:** A pesar de la capacitación, los empleados no utilizan las nuevas herramientas en su día a día, invalidando la inversión.", "Mitigación: **Foco en la Experiencia de Usuario (UX):** Cada solución se diseñará para ser intuitiva, fácil de usar y que realmente simplifique el trabajo del usuario. Si la herramienta es buena, la gente querrá usarla.", "Mitigación: **Programa de 'Champions':** Identificaremos 'embajadores' en cada equipo que serán los primeros en aprender y luego ayudarán a sus compañeros, creando una red de soporte orgánico.", "**Contexto actual:** • El panel cliente nuevo de Flow (70% progreso) está específicamente enfocado en usabilidad y nuevos KPIs, priorizando la experiencia del usuario. • El Portal de Clientes primera versión está diseñado para acceso simple y seguro a documentos, facilitando la adopción natural. • Fer y Caro están coordinando iniciativas como potenciales 'champions' en el Laboratorio Pervex."] },
            { title: "Integración Tecnológica", icon: <RiskIcon />, timeframe: ['mediano', 'largo'], details: ["**El Riesgo:** Los sistemas nuevos y antiguos no se pueden conectar correctamente, creando más problemas de los que resuelven y generando silos de información.", "Mitigación: **Arquitectura Flexible y Pilotos:** Diseñaremos una arquitectura tecnológica modular desde el inicio. Antes de cualquier implementación a gran escala, realizaremos pruebas de concepto (PoC) y pilotos en un ambiente controlado para asegurar que la integración funcione perfectamente.", "**Contexto actual:** • La migración de Geovictoria de Excel a API (70% completa) está siendo desarrollada como piloto, permitiendo validar la integración antes de escalar. • El prototipo de 'Selection Analyst' ha sido probado exitosamente antes de planificar la expansión. • El nuevo desarrollo de Geovictoria está en testing con el cliente Flow, validando la integración en un ambiente controlado antes del despliegue general."] },
            { title: "Sobrecarga Operativa", icon: <RiskIcon />, timeframe: ['corto'], details: ["**El Riesgo:** El equipo de proyecto se ve abrumado por la cantidad de solicitudes y el ritmo del cambio, afectando la calidad y los plazos.", "Mitigación: **Automatización Progresiva:** No intentaremos cambiar todo de una vez. Empezaremos con procesos simples y aumentaremos la complejidad gradualmente, asegurando que el equipo pueda manejar la carga.", "Mitigación: **Priorización Clara:** Usaremos una matriz de 'Impacto vs. Esfuerzo' para decidir qué proyectos abordar primero, enfocando nuestros recursos limitados en lo que genere más valor para el negocio.", "**Contexto actual:** • El levantamiento de procesos se inició con áreas estratégicas (Reclutamiento y Selección), priorizando impactos altos. • La estandarización de paneles BI establece un modelo replicable que reduce el esfuerzo futuro. • Los proyectos están en diferentes fases (Flow 100% vs. Portal 70% vs. Geovictoria 30%), permitiendo gestionar la carga de manera progresiva y evitando saturación simultánea."] }
        ]
    },

    finalMessage: "Este modelo genera eficiencia, mejora la experiencia interna y externa, y abre nuevas fuentes de valor comercial a través de innovación aplicada y datos accionables."
};
