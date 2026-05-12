# Consultor IA — Proyecto Carbón Activado de Pino Formosa

Aplicación web con agente de inteligencia artificial consultor del proyecto.

---

## Cómo deployar en Vercel (paso a paso)

### Prerequisitos
- Cuenta en GitHub (gratis): https://github.com
- Cuenta en Vercel (gratis): https://vercel.com
- API Key de Anthropic: https://console.anthropic.com

---

### Paso 1 — Subir el código a GitHub

1. Entrá a https://github.com y hacé login
2. Hacé click en el botón verde **"New"** (arriba a la izquierda)
3. Nombre del repositorio: `carbon-activado-consultor`
4. Dejalo en **Public** o **Private** (cualquiera funciona)
5. Click en **"Create repository"**
6. En la página del repositorio, click en **"uploading an existing file"**
7. Arrastrá TODOS los archivos de esta carpeta manteniendo la estructura:
   ```
   carbon-activado-app/
   ├── api/
   │   └── chat.js
   ├── public/
   │   └── index.html
   ├── vercel.json
   └── package.json
   ```
8. Click en **"Commit changes"**

---

### Paso 2 — Deployar en Vercel

1. Entrá a https://vercel.com y hacé login con tu cuenta de GitHub
2. Click en **"Add New Project"**
3. Seleccioná el repositorio `carbon-activado-consultor`
4. Click en **"Import"**
5. En la pantalla de configuración, NO cambies nada — Vercel lo detecta automáticamente
6. Click en **"Deploy"**
7. Esperá ~1 minuto mientras hace el deploy
8. Vercel te da una URL del tipo: `carbon-activado-consultor.vercel.app`

---

### Paso 3 — Agregar la API Key de Anthropic

⚠️ Este paso es OBLIGATORIO — sin la key el agente no responde.

1. En Vercel, andá a tu proyecto → **"Settings"** → **"Environment Variables"**
2. Click en **"Add New"**
3. Name: `ANTHROPIC_API_KEY`
4. Value: pegá tu API key (empieza con `sk-ant-...`)
5. Environments: dejá marcados los 3 (Production, Preview, Development)
6. Click en **"Save"**
7. Volvé a **"Deployments"** → click en los 3 puntos del último deploy → **"Redeploy"**
8. Esperá ~30 segundos

---

### Paso 4 — Compartir

¡Listo! Tu app está en línea. Copiá la URL de Vercel y mandala por WhatsApp.

La URL queda algo así: `https://carbon-activado-consultor.vercel.app`

Cualquier persona con la URL puede usar el consultor desde el celular o la computadora.

---

## Costos

- GitHub: **gratis**
- Vercel: **gratis** (hasta 100GB de bandwidth por mes, más que suficiente)
- Anthropic API: se cobra por uso. Estimado para uso normal del equipo: **USD 1-5/mes**

---

## Soporte

Si algo no funciona, verificá:
1. Que la API Key esté correctamente cargada en Vercel (sin espacios al inicio o al final)
2. Que hayas hecho "Redeploy" después de agregar la key
3. Que la key de Anthropic tenga créditos disponibles en console.anthropic.com
