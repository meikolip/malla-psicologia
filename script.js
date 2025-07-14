document.addEventListener('DOMContentLoaded', function() {
    // Datos de la malla curricular
    const mallaData = [
        {
            ciclo: "I",
            ramos: [
                { codigo: "0001502000HU", nombre: "COMPRENSIÓN DE TEXTOS Y REDACCIÓN BÁSICA", creditos: 3, tipo: "obligatorio", requisitos: [], ht: 1, hp: 4, hl: 0, ha: 0, th: 5 },
                { codigo: "0001502000IN", nombre: "DESARROLLO DE COMPETENCIAS DIGITALES", creditos: 2, tipo: "obligatorio", requisitos: [], ht: 1, hp: 2, hl: 0, ha: 0, th: 3 },
                { codigo: "0001501000HU", nombre: "ESTRATEGIAS PARA EL APRENDIZAJE AUTÓNOMO", creditos: 3, tipo: "obligatorio", requisitos: [], ht: 1, hp: 4, hl: 0, ha: 0, th: 5 },
                { codigo: "1901601000SA", nombre: "INTRODUCCIÓN A LA PSICOLOGÍA", creditos: 3, tipo: "obligatorio", requisitos: [], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "0001501000IN", nombre: "MATEMÁTICA BÁSICA", creditos: 3, tipo: "obligatorio", requisitos: [], ht: 1, hp: 4, hl: 0, ha: 0, th: 5 },
                { codigo: "1901602000SA", nombre: "PSICOLOGÍA DEL DESARROLLO HUMANO I", creditos: 3, tipo: "obligatorio", requisitos: [], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "1901603000SA", nombre: "TALLER DE DESARROLLO PERSONAL", creditos: 1, tipo: "obligatorio", requisitos: [], ht: 0, hp: 2, hl: 0, ha: 0, th: 2 }
            ]
        },
        {
            ciclo: "II",
            ramos: [
                { codigo: "0002501000HU", nombre: "COMPRENSIÓN Y REDACCIÓN DE TEXTOS ACADÉMICOS", creditos: 3, tipo: "obligatorio", requisitos: ["0001502000HU"], ht: 1, hp: 4, hl: 0, ha: 0, th: 5 },
                { codigo: "0002501000SA", nombre: "ECOLOGÍA Y DESARROLLO SOSTENIBLE", creditos: 3, tipo: "obligatorio", requisitos: [], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "1902603000SA", nombre: "PROCESOS AFECTIVOS Y MOTIVACIONALES", creditos: 3, tipo: "obligatorio", requisitos: ["1901601000SA"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "1902602000SA", nombre: "PSICOBIOLOGÍA HUMANA", creditos: 4, tipo: "obligatorio", requisitos: [], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1902604000SA", nombre: "PSICOLOGÍA DEL APRENDIZAJE", creditos: 3, tipo: "obligatorio", requisitos: ["1901601000SA"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "1902601000SA", nombre: "PSICOLOGÍA DEL DESARROLLO HUMANO II", creditos: 3, tipo: "obligatorio", requisitos: ["1901602000SA"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 }
            ]
        },
        {
            ciclo: "III",
            ramos: [
                { codigo: "1903601000IN", nombre: "ESTADÍSTICA APLICADA A LA PSICOLOGÍA I", creditos: 3, tipo: "obligatorio", requisitos: ["0001501000IN"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "0003501000TE", nombre: "FILOSOFÍA", creditos: 3, tipo: "obligatorio", requisitos: [], ht: 3, hp: 0, hl: 0, ha: 0, th: 3 },
                { codigo: "1903602000SA", nombre: "NEUROCIENCIA COGNITIVA", creditos: 4, tipo: "obligatorio", requisitos: ["1902602000SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1903603000SA", nombre: "PROCESOS COGNITIVOS", creditos: 4, tipo: "obligatorio", requisitos: ["1902602000SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1903601000SA", nombre: "PSICOLOGÍA DE LA PERSONALIDAD", creditos: 3, tipo: "obligatorio", requisitos: ["1902603000SA"], ht: 3, hp: 0, hl: 0, ha: 0, th: 3 },
                { codigo: "1903604000SA", nombre: "PSICOLOGÍA EXPERIMENTAL", creditos: 3, tipo: "obligatorio", requisitos: ["1902604000SA"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 }
            ]
        },
        {
            ciclo: "IV",
            ramos: [
                { codigo: "0004501000TE", nombre: "ANTROPOLOGÍA FILOSÓFICA", creditos: 3, tipo: "obligatorio", requisitos: ["0003501000TE"], ht: 3, hp: 0, hl: 0, ha: 0, th: 3 },
                { codigo: "1904601000IN", nombre: "ESTADÍSTICA APLICADA A LA PSICOLOGÍA II", creditos: 3, tipo: "obligatorio", requisitos: ["1903601000IN"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "1904602000SA", nombre: "PSICOLOGÍA SOCIAL COMUNITARIA", creditos: 3, tipo: "obligatorio", requisitos: ["1902603000SA"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "1904603000SA", nombre: "PSICOPATOLOGÍA", creditos: 4, tipo: "obligatorio", requisitos: ["1903602000SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1904601000SA", nombre: "TÉCNICAS DE OBSERVACIÓN Y ENTREVISTA PSICOLÓGICA", creditos: 4, tipo: "obligatorio", requisitos: ["1902603000SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1904604000SA", nombre: "TÉCNICAS DE PARTICIPACIÓN Y DESARROLLO GRUPAL", creditos: 3, tipo: "obligatorio", requisitos: ["1901603000SA"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 }
            ]
        },
        {
            ciclo: "V",
            ramos: [
                { codigo: "1905601000SA", nombre: "CONSTRUCCIÓN DE INSTRUMENTOS PSICOLÓGICOS", creditos: 4, tipo: "obligatorio", requisitos: ["1904601000IN"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "0005501000TE", nombre: "ÉTICA", creditos: 3, tipo: "obligatorio", requisitos: ["0004501000TE"], ht: 3, hp: 0, hl: 0, ha: 0, th: 3 },
                { codigo: "1905603000SA", nombre: "EVALUACIÓN PSICOLÓGICA I", creditos: 4, tipo: "obligatorio", requisitos: ["1904601000SA"], ht: 2, hp: 4, hl: 0, ha: 0, th: 6 },
                { codigo: "1905604000SA", nombre: "PSICOLOGÍA EDUCATIVA", creditos: 4, tipo: "obligatorio", requisitos: ["1903603000SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1905602000SA", nombre: "PSICOLOGÍA ORGANIZACIONAL", creditos: 4, tipo: "obligatorio", requisitos: ["1904601000SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1905605000SA", nombre: "TALLER DE PROGRAMAS INFORMÁTICOS PARA PSICOLOGÍA", creditos: 1, tipo: "obligatorio", requisitos: ["1904601000IN"], ht: 0, hp: 2, hl: 0, ha: 0, th: 2 }
            ]
        },
        {
            ciclo: "VI",
            ramos: [
                { codigo: "1906701C40SA", nombre: "CLIMA Y CONVIVENCIA ESCOLAR", creditos: 4, tipo: "electivo", requisitos: ["97CR"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1906602000SA", nombre: "COMPORTAMIENTO SEXUAL", creditos: 3, tipo: "obligatorio", requisitos: ["1903602000SA"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "1906701C20SA", nombre: "EPIDEMIOLOGÍA EN SALUD MENTAL", creditos: 4, tipo: "electivo", requisitos: ["97CR"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1906603000SA", nombre: "EVALUACIÓN PSICOLÓGICA II", creditos: 4, tipo: "obligatorio", requisitos: ["1905603000SA"], ht: 2, hp: 4, hl: 0, ha: 0, th: 6 },
                { codigo: "0006501000TE", nombre: "FE Y CULTURA", creditos: 3, tipo: "obligatorio", requisitos: ["0005501000TE"], ht: 3, hp: 0, hl: 0, ha: 0, th: 3 },
                { codigo: "1906601000SA", nombre: "MÉTODOS DE INVESTIGACIÓN PSICOLÓGICA", creditos: 3, tipo: "obligatorio", requisitos: ["1905605000SA"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "1906605000SA", nombre: "PROGRAMAS DE PROMOCIÓN Y PREVENCIÓN EN SALUD MENTAL", creditos: 2, tipo: "obligatorio", requisitos: ["1904604000SA"], ht: 1, hp: 2, hl: 0, ha: 0, th: 3 },
                { codigo: "1906604000SA", nombre: "PSICOLOGÍA CLÍNICA Y DE LA SALUD", creditos: 4, tipo: "obligatorio", requisitos: ["1904603000SA"], ht: 2, hp: 4, hl: 0, ha: 0, th: 6 },
                { codigo: "1906701C30SA", nombre: "PSICOLOGÍA POSITIVA", creditos: 4, tipo: "electivo", requisitos: ["97CR"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1906701C10SA", nombre: "SELECCIÓN Y CONTRATACIÓN DE PERSONAL", creditos: 4, tipo: "electivo", requisitos: ["97CR"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 }
            ]
        },
        {
            ciclo: "VII",
            ramos: [
                { codigo: "1907701C20SA", nombre: "BÚSQUEDA DE INFORMACIÓN Y ANÁLISIS DEL ESTADO DEL ARTE", creditos: 4, tipo: "electivo", requisitos: ["1906701C20SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1907602000SA", nombre: "DIAGNÓSTICO PSICOLÓGICO", creditos: 3, tipo: "obligatorio", requisitos: ["1906603000SA"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "1907701C10SA", nombre: "EVALUACIÓN DEL DESEMPEÑO, CAPACITACIÓN Y DESARROLLO DEL PERSONAL", creditos: 4, tipo: "electivo", requisitos: ["1906701C10SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1907701C30SA", nombre: "INTERVENCIÓN EN ADICCIONES", creditos: 4, tipo: "electivo", requisitos: ["1906701C30SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1907702000SA", nombre: "INTERVENCIÓN PSICOLÓGICA EN EMERGENCIA Y DESASTRE", creditos: 3, tipo: "obligatorio", requisitos: ["1906605000SA"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "1907701000SA", nombre: "INTERVENCIÓN PSICOLÓGICA I", creditos: 4, tipo: "obligatorio", requisitos: ["1906603000SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "0007501000TE", nombre: "MORAL CATÓLICA", creditos: 3, tipo: "obligatorio", requisitos: ["0006501000TE"], ht: 3, hp: 0, hl: 0, ha: 0, th: 3 },
                { codigo: "1907601000SA", nombre: "NEUROPSICOLOGÍA", creditos: 3, tipo: "obligatorio", requisitos: ["1906604000SA"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "1907701C40SA", nombre: "PREVENCIÓN EN CONDUCTAS DE RIESGO EN AMBIENTES EDUCATIVOS", creditos: 4, tipo: "electivo", requisitos: ["1906701C40SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1907603000SA", nombre: "TALLER DE INVESTIGACIÓN I", creditos: 3, tipo: "obligatorio", requisitos: ["1906601000SA"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 }
            ]
        },
        {
            ciclo: "VIII",
            ramos: [
                { codigo: "SA1906706", nombre: "ABORDAJE Y ESTUDIO DE LA VIOLENCIA FAMILIAR Y FEMINICIDIO", creditos: 4, tipo: "electivo", requisitos: ["1907701C30SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1908602000SA", nombre: "DEONTOLOGÍA Y BIOÉTICA", creditos: 2, tipo: "obligatorio", requisitos: ["0007501000TE"], ht: 1, hp: 2, hl: 0, ha: 0, th: 3 },
                { codigo: "0008501000TE", nombre: "DOCTRINA SOCIAL DE LA IGLESIA", creditos: 3, tipo: "obligatorio", requisitos: [], ht: 3, hp: 0, hl: 0, ha: 0, th: 3 },
                { codigo: "1908601000SA", nombre: "GESTIÓN DE SERVICIOS PSICOLÓGICOS", creditos: 3, tipo: "obligatorio", requisitos: [], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "1908701C20SA", nombre: "HABILIDADES DE REDACCIÓN CIENTÍFICA", creditos: 4, tipo: "electivo", requisitos: ["1907701C20SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1908701000SA", nombre: "INTERVENCIÓN PSICOLÓGICA II", creditos: 4, tipo: "obligatorio", requisitos: ["1907701000SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1908701C40SA", nombre: "PREVENCIÓN, PROTECCIÓN Y CONTENCIÓN DEL ABUSO SEXUAL EN NIÑOS Y ADOLESCENTES", creditos: 4, tipo: "electivo", requisitos: ["1907701C40SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1908702000SA", nombre: "PSICOLOGÍA FORENSE", creditos: 3, tipo: "obligatorio", requisitos: ["1906604000SA"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 },
                { codigo: "1908701C10SA", nombre: "REMUNERACIÓN Y ADMINISTRACIÓN DE LAS COMPENSACIONES", creditos: 4, tipo: "electivo", requisitos: ["1907701C10SA"], ht: 3, hp: 2, hl: 0, ha: 0, th: 5 },
                { codigo: "1908603000SA", nombre: "TALLER DE INVESTIGACIÓN II", creditos: 3, tipo: "obligatorio", requisitos: ["1907603000SA"], ht: 2, hp: 2, hl: 0, ha: 0, th: 4 }
            ]
        },
        {
            ciclo: "IX",
            ramos: [
                { codigo: "1909701000SA", nombre: "PRÁCTICAS PRE-PROFESIONALES I", creditos: 18, tipo: "obligatorio", requisitos: ["165CR"], ht: 3, hp: 30, hl: 0, ha: 0, th: 33 },
                { codigo: "1909601000SA", nombre: "TALLER DE INVESTIGACIÓN III", creditos: 2, tipo: "obligatorio", requisitos: ["1908603000SA"], ht: 1, hp: 2, hl: 0, ha: 0, th: 3 }
            ]
        },
        {
            ciclo: "X",
            ramos: [
                { codigo: "1910701000SA", nombre: "PRÁCTICAS PRE-PROFESIONALES II", creditos: 18, tipo: "obligatorio", requisitos: ["1909701000SA"], ht: 3, hp: 30, hl: 0, ha: 0, th: 33 }
            ]
        }
    ];

    // Estado de la aplicación
    const state = {
        aprobados: new Set(),
        totalCreditos: 0
    };

    // Elementos del DOM
    const mallaContainer = document.getElementById('malla-container');
    const resetBtn = document.getElementById('reset-btn');
    const totalCreditsDisplay = document.getElementById('total-credits');

    // Función para renderizar la malla
    function renderMalla() {
        mallaContainer.innerHTML = '';
        
        mallaData.forEach(ciclo => {
            const cicloElement = document.createElement('div');
            cicloElement.className = 'ciclo';
            
            const cicloHeader = document.createElement('div');
            cicloHeader.className = 'ciclo-header';
            cicloHeader.textContent = `Ciclo ${ciclo.ciclo}`;
            cicloElement.appendChild(cicloHeader);
            
            ciclo.ramos.forEach(ramo => {
                const ramoElement = document.createElement('div');
                ramoElement.className = `ramo ${ramo.tipo} ${state.aprobados.has(ramo.codigo) ? 'aprobado' : ''}`;
                
                // Verificar si está bloqueado
                const requisitosCumplidos = verificarRequisitos(ramo.requisitos);
                if (!requisitosCumplidos && !state.aprobados.has(ramo.codigo)) {
                    ramoElement.classList.add('bloqueado');
                }
                
                const ramoHeader = document.createElement('div');
                ramoHeader.className = 'ramo-header';
                
                const ramoCodigo = document.createElement('span');
                ramoCodigo.className = 'ramo-codigo';
                ramoCodigo.textContent = ramo.codigo;
                ramoHeader.appendChild(ramoCodigo);
                
                const ramoCreditos = document.createElement('span');
                ramoCreditos.className = 'ramo-creditos';
                ramoCreditos.textContent = `${ramo.creditos} cr.`;
                ramoHeader.appendChild(ramoCreditos);
                
                ramoElement.appendChild(ramoHeader);
                
                const ramoNombre = document.createElement('div');
                ramoNombre.className = 'ramo-nombre';
                ramoNombre.textContent = ramo.nombre;
                ramoElement.appendChild(ramoNombre);
                
                // Mostrar requisitos si está bloqueado
                if (!requisitosCumplidos && !state.aprobados.has(ramo.codigo) && ramo.requisitos.length > 0) {
                    const ramoRequisitos = document.createElement('div');
                    ramoRequisitos.className = 'ramo-requisitos';
                    
                    const requisitosTexto = ramo.requisitos.map(req => {
                        if (req === "97CR") return "97 créditos";
                        if (req === "165CR") return "165 créditos";
                        return req;
                    }).join(", ");
                    
                    ramoRequisitos.textContent = `Requisitos: ${requisitosTexto}`;
                    ramoElement.appendChild(ramoRequisitos);
                }
                
                // Horas teóricas y prácticas
                const ramoHoras = document.createElement('div');
                ramoHoras.className = 'ramo-horas';
                ramoHoras.innerHTML = `
                    <span>HT: ${ramo.ht}</span>
                    <span>HP: ${ramo.hp}</span>
                    <span>TH: ${ramo.th}</span>
                `;
                ramoElement.appendChild(ramoHoras);
                
                // Botón de aprobar
                const aprobarBtn = document.createElement('button');
                aprobarBtn.className = 'aprobar-btn';
                aprobarBtn.textContent = state.aprobados.has(ramo.codigo) ? '✔ Aprobado' : 'Aprobar';
                aprobarBtn.addEventListener('click', () => toggleAprobarRamo(ramo.codigo, ramo.creditos));
                
                if (!requisitosCumplidos && !state.aprobados.has(ramo.codigo)) {
                    aprobarBtn.disabled = true;
                }
                
                ramoElement.appendChild(aprobarBtn);
                cicloElement.appendChild(ramoElement);
            });
            
            mallaContainer.appendChild(cicloElement);
        });
        
        // Actualizar créditos
        totalCreditsDisplay.textContent = state.totalCreditos;
    }

    // Función para verificar requisitos
    function verificarRequisitos(requisitos) {
        if (requisitos.length === 0) return true;
        
        // Verificar créditos requeridos
        if (requisitos.includes("97CR") && state.totalCreditos < 97) return false;
        if (requisitos.includes("165CR") && state.totalCreditos < 165) return false;
        
        // Verificar ramos específicos
        return requisitos.every(req => {
            if (req === "97CR" || req === "165CR") return true;
            return state.aprobados.has(req);
        });
    }

    // Función para aprobar/desaprobar ramo
    function toggleAprobarRamo(codigo, creditos) {
        if (state.aprobados.has(codigo)) {
            state.aprobados.delete(codigo);
            state.totalCreditos -= creditos;
        } else {
            state.aprobados.add(codigo);
            state.totalCreditos += creditos;
        }
        
        renderMalla();
    }

    // Reiniciar todo
    resetBtn.addEventListener('click', () => {
        state.aprobados.clear();
        state.totalCreditos = 0;
        renderMalla();
    });

    // Inicializar la malla
    renderMalla();
});
