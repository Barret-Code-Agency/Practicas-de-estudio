// 1. DATA ESTRUCTURADA
const FILE_CONTENT = {
    'home': {
    name: 'index.js',
    html: `
        <div class="code-view">
            <p><span class="keyword">import</span> { efficiency, scalability } <span class="keyword">from</span> <span class="string">'@fhd/core'</span>;</p>
            <p><span class="keyword">import</span> { strategy } <span class="keyword">from</span> <span class="string">'@fhd/executive-vision'</span>;</p>
            <br>
            <p><span class="comment">// Fernando Héctor Delgado: Software Engineer & Corporate Strategist</span></p>
            <p><span class="keyword">class</span> <span class="variable">DeveloperProfile</span> <span class="keyword">extends</span> <span class="variable">SystemArchitect</span> {</p>
            <p class="indent"><span class="keyword">constructor</span>() {</p>
            <p class="indent2"><span class="keyword">super</span>();</p>
            <p class="indent2"><span class="keyword">this</span>.<span class="property">name</span> = <span class="string">"Fernando Héctor Delgado"</span>;</p>
            <p class="indent2"><span class="keyword">this</span>.<span class="property">mission</span> = <span class="string">"Transforming complex business needs into scalable software"</span>;</p>
            <p class="indent2"><span class="keyword">this</span>.<span class="property">philosophy</span> = <span class="string">"Code is for humans to read, and only incidentally for machines to execute"</span>;</p>
            <p class="indent">}</p>
            <br>
            <p class="indent"><span class="variable">currentFocus</span>() {</p>
            <p class="indent2"><span class="keyword">return</span> [</p>
            <p class="indent3"><span class="string">'Full Stack Development'</span>,</p>
            <p class="indent3"><span class="string">'Cloud Architecture'</span>,</p>
            <p class="indent3"><span class="string">'Corporate Digital Branding'</span></p>
            <p class="indent2">];</p>
            <p class="indent">}</p>
            <p>}</p>
            <br>
            <p><span class="keyword">export const</span> <span class="variable">fhd</span> = <span class="keyword">new</span> <span class="variable">DeveloperProfile</span>();</p>
        </div>`
},

'skills': {
    name: 'skills.ts',
    html: `
        <div class="code-view">
            <p><span class="keyword">export const</span> <span class="variable">FullStackArsenal</span> = {</p>
            
            <div class="skill-category">FRONTEND (UI/UX)</div>
            <div class="skill-bar"><div class="fill" style="width: 95%;">HTML5 / CSS3 / JS ES6+</div> 95%</div>
            <div class="skill-bar"><div class="fill" style="width: 90%;">REACT / RESPONSIVE DESIGN</div> 90%</div>
            
            <div class="skill-category">BACKEND & APIs</div>
            <div class="skill-bar"><div class="fill" style="width: 85%;">NODE.JS / PYTHON / .NET</div> 85%</div>
            <div class="skill-bar"><div class="fill" style="width: 80%;">REST / GRAPHQL APIs</div> 80%</div>
            
            <div class="skill-category">DATA ARCHITECTURE</div>
            <div class="skill-bar"><div class="fill" style="width: 85%;">POSTGRESQL / MONGODB</div> 85%</div>
            <div class="skill-bar"><div class="fill" style="width: 80%;">CACHING / INDEXING</div> 80%</div>
            
            <div class="skill-category">DEVOPS & CLOUD</div>
            <div class="skill-bar"><div class="fill" style="width: 75%;">DOCKER / AZURE / AWS</div> 75%</div>
            <div class="skill-bar"><div class="fill" style="width: 90%;">GIT / CI-CD PIPELINES</div> 90%</div>
            
            <div class="skill-category">SECURITY & ARCHITECTURE</div>
            <div class="skill-bar"><div class="fill" style="width: 85%;">OWASP / JWT / OAUTH</div> 85%</div>
            <div class="skill-bar"><div class="fill" style="width: 80%;">MICROSERVICES / SERVERLESS</div> 80%</div>

            <div class="skill-category">EXTRAS</div>
            <p class="indent"><span class="property">testing</span>: <span class="string">"Unit, Integration"</span>,</p>
            <p class="indent"><span class="property">docs</span>: <span class="string">"Swagger, JSDoc"</span>,</p>
            <p class="indent"><span class="property">design</span>: <span class="string">"Figma, UX/UI"</span></p>
            <p>};</p>
        </div>`
},
    'projects': {
        name: 'projects.json',
        html: `<div class="code-view"><p><span class="comment">// Cargando repositorios desde GitHub...</span></p></div>`
    }
};

// 2. FUNCIÓN DE RENDERIZADO (El Corazón)
function renderEditor(target) {
    const data = FILE_CONTENT[target];
    const editor = document.getElementById('editor-content');
    const tabName = document.getElementById('current-tab-name');

    if (data && editor) {
        tabName.innerText = data.name;
        editor.innerHTML = data.html;
        
        // Actualizar UI del explorador
        document.querySelector('.file.active')?.classList.remove('active');
        document.querySelector(`[data-target="${target}"]`)?.classList.add('active');
    }
}

// 3. ACTIVACIÓN DE CLICKS
document.querySelectorAll('.file').forEach(file => {
    file.addEventListener('click', () => {
        const target = file.getAttribute('data-target');
        renderEditor(target);
    });
});

// 4. EL ARSENAL: FETCH DE GITHUB
async function loadGithub() {
    try {
        const response = await fetch('https://api.github.com/users/BSC3120/repos');
        const repos = await response.json();
        
        // Actualizamos el contenido de la pestaña "projects" con datos reales
        FILE_CONTENT['projects'].html = `
            <div class="code-view">
                <p>{</p>
                ${repos.slice(0, 5).map(repo => `
                    <p class="indent"><span class="property">"${repo.name}"</span>: <a href="${repo.html_url}" target="_blank" class="string">"view_source"</a>,</p>
                `).join('')}
                <p class="indent"><span class="property">"Nave_Negocios"</span>: <a href="https://bsc3120.github.io/Examen-parcial/" target="_blank" class="string">"LIVE_DEMO"</a></p>
                <p>}</p>
            </div>`;
    } catch (e) {
        FILE_CONTENT['projects'].html = `<div class="code-view"><p class="string">Error al conectar con el arsenal de GitHub.</p></div>`;
    }
}

// Inicializar
loadGithub();
renderEditor('home');

document.getElementById('terminalInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = e.target.value.toLowerCase().trim();
        if (cmd === 'ls' || cmd === 'projects') renderEditor('projects');
        if (cmd === 'clear') document.getElementById('terminalOutput').innerHTML = '';
        e.target.value = '';
    }
});


// ... (todo tu código anterior de FILE_CONTENT y loadGithub)

// Localiza el event listener del terminalInput
const terminalInput = document.getElementById('terminalInput');

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        // Capturamos el comando y lo limpiamos
        const input = e.target.value.toLowerCase().trim();
        const terminalOutput = document.getElementById('terminalOutput');
        
        // Creamos la línea visual de lo que escribiste
        const line = document.createElement('div');
        line.innerHTML = `<span class="prompt">fhd@portfolio:~$</span> ${input}`;
        terminalOutput.appendChild(line);

        // AQUÍ PEGAS LA LÓGICA DE LOS COMANDOS:
        if (input === 'ls' || input === 'projects') {
            renderEditor('projects');
        } 
        else if (input === 'clear') {
            terminalOutput.innerHTML = '';
        }
        else if (input === 'deploy') {
            // Lógica de simulación de despliegue
            const steps = [
                "Sincronizando arsenal técnico...",
                "Validando arquitectura de microservicios...",
                "Optimizando assets de branding digital...",
                "Status: SISTEMA DESPLEGADO CON ÉXITO."
            ];
            steps.forEach((step, i) => {
                setTimeout(() => {
                    const sLine = document.createElement('div');
                    sLine.style.color = i === 3 ? "#4ade80" : "#858585";
                    sLine.innerText = `> ${step}`;
                    terminalOutput.appendChild(sLine);
                    terminalOutput.scrollTop = terminalOutput.scrollHeight;
                }, i * 600);
            });
        }
        else if (input === 'help') {
            const hLine = document.createElement('div');
            hLine.style.color = "#858585";
            hLine.innerText = "Comandos disponibles: [ls, projects, deploy, clear, help]";
            terminalOutput.appendChild(hLine);
        }

        // Limpiamos el input y hacemos scroll al final
        e.target.value = '';
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
});
