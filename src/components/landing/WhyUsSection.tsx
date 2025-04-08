"use client";

export default function ServicesSection() {
  const services = [
    {
      id: "bi-visualization",
      title: "BI y Visualización",
      description: "Nuestro objetivo es crear herramientas a medida, para que puedas profundizar y encontrar tantos conocimientos como los datos te permitan. Transformamos datos complejos en simples analíticos.",
      tools: [
        "Power BI",
        "Qlik",
        "Tableau",
        "SAP BusinessObjects"
      ]
    },
    {
      id: "advanced-analytics",
      title: "Analítica Avanzada",
      description: "Optimiza la velocidad en la toma de decisiones mientras reduces el costo, con Machine Learning e Inteligencia Artificial. Amplifica las capacidades humanas y convierte grandes volúmenes de datos",
      tools: [
        "Orange",
        "Scikit-Learn, Keras, TensorFlow, ImageIA, Yolo",
        "Azure Machine Learning",
        "Anaconda"
      ]
    },
    {
      id: "data-engineering",
      title: "Ingeniería de Datos",
      description: "Los datos son nuestro segundo idioma. Cortamos y troceamos datos, construimos pipelines, data warehouses y data lakes; así como también migraciones e integraciones de plataformas. ",
      tools: [
        "Google Big Query",
        "SAP HANA",
        "Snowflake",
      ]
    }
  ];

  return (
    <section id="NuestrosServicios" className="py-20 relative">
      {/* 背景图片层（单独容器） */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      >
        {/* 阴影层（只覆盖背景图片） */}
        <div className="absolute inset-0 z-10"></div>
      </div>

      {/* 内容层（在阴影之上） */}
      <div className="container-custom relative z-20">
        <h2 className="text-white text-3xl font-bold mb-16 text-center">
          Why Choose Us / Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-black text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>

              {service.tools && (
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {service.tools.map((tool, idx) => (
                    <li key={`${service.id}-tool-${idx}`} className="text-sm">
                      {tool}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
