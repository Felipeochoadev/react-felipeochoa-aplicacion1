export const Inicio1Datos = {
    usuario: {
        nombre: "Felipe Ochoa",
        saludo: "Welcome back,",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8R6XNLrf2yXyYRZF6S4hIGSAaJwNxXxyNX8Q7i3TSKE-UzP6kIo08w34DJ3MfqXJ-_j0WUgdKnnJBcffoTyuYAe_RDpEgirNda-KJXURwqA6o6T3z8kSaLkI85xoORS6PigXB6GgB_bOavrn2IxtH2w5vQR4G2KAKw9SZ3OmWutoYVHirvrFWFtJiVJ8vPyiipjdr0LZir2s2DgWwYet7-M1QyVo8YqGNY46raeD_FYq72Vj1UmuzFRpfjcK_6cmKgBvnepTHOAY3"
    },
    estadisticas: [
        { id: "casinos", titulo: "Active Casinos", valor: "24", tendencia: "+2%", esPositiva: true },
        { id: "health", titulo: "System Health", valor: "98.5%", tendencia: "-0.5%", esPositiva: false }
    ],
    casinos: [
        {
            id: 1,
            nombre: "Grand Plaza Casino",
            ubicacion: "Las Vegas, NV",
            estado: "Active",
            ingresos: "$124.5k",
            jugadores: "1.2k",
            grafico: [
                { val: 49 }, { val: 60 }, { val: 45 }, { val: 70 },
                { val: 55 }, { val: 80 }, { val: 40 }, { val: 90 },
                { val: 50 }
            ],
            color: "#00D1FF",
            esIntermitente: true
        },
        {
            id: 2,
            nombre: "Neon Palms Resort",
            ubicacion: "Miami, FL",
            estado: "Inactive",
            ingresos: "$0.00",
            jugadores: "0",
            grafico: [
                { val: 30 }, { val: 30 }, { val: 30 }, { val: 30 },
                { val: 30 }, { val: 30 }, { val: 30 }, { val: 30 }
            ],
            color: "#666",
            esIntermitente: false
        },
        {
            id: 3,
            nombre: "Blue Diamond",
            ubicacion: "Macau, SAR",
            estado: "Active",
            ingresos: "$452.1k",
            jugadores: "4.8k",
            grafico: [
                { val: 10 }, { val: 15 }, { val: 12 }, { val: 25 },
                { val: 20 }, { val: 40 }, { val: 35 }, { val: 55 },
                { val: 50 }, { val: 70 }
            ],
            color: "#00D1FF",
            esIntermitente: true
        }
    ],
    navegacion: [
        { id: "casinos", label: "Casinos", icono: "dashboard", href: "#casinos" },
        { id: "machines", label: "Maquinas", icono: "casino", href: "#machines" },
        { id: "add", label: "Agregar", icono: "add", href: "#add", esPrincipal: true },
        { id: "liquidation", label: "Liquidacion", icono: "payments", href: "#liquidation" },
        { id: "users", label: "Usuarios", icono: "group", href: "#users" }
    ]
};
