# 🎬 Gifs App

Una aplicación web moderna para buscar, explorar y gestionar GIFs utilizando la API de Giphy. Desarrollada con Angular 19 con una arquitectura modular y escalable.

## 📋 Descripción

Gifs App es una aplicación de escritorio que permite a los usuarios:
- **Explorar GIFs trending** en tiempo real
- **Buscar GIFs** por palabras clave, descripción o etiquetas
- **Gestionar historial de búsquedas** con persistencia local
- **Navegar** a través de una interfaz intuitiva y responsive

## ✨ Funcionalidades Principales

### 🚀 Trending Gifs
- Visualización de los GIFs más populares del momento
- Carga automática de contenido desde la API de Giphy
- Interfaz responsive con grid adaptativo

### 🔍 Búsqueda de GIFs
- Búsqueda en tiempo real por texto
- Resultados instantáneos con la API de Giphy
- Interfaz de búsqueda intuitiva

### 📚 Historial de Búsquedas
- Persistencia local de búsquedas recientes
- Navegación rápida a búsquedas anteriores
- Límite de 10 búsquedas en el historial

### 🎨 Interfaz de Usuario
- Diseño moderno con Tailwind CSS
- Menú lateral con navegación intuitiva
- Grid responsive para visualización de GIFs
- Spinner de carga para mejor UX

## 🏗️ Arquitectura del Proyecto

El proyecto está organizado en una estructura modular y escalable:

```
src/app/
├── gifs/                        # 🎯 Módulo principal de GIFs
│   ├── components/              # Componentes de presentación
│   │   ├── gif-list/            # Lista de GIFs
│   │   └── side-menu/           # Menú lateral
│   ├── interfaces/              # Contratos y tipos
│   │   ├── giphy.interfaces.ts  # Interfaces de la API externa
│   │   └── shared.interface.ts  # Interfaces compartidas
│   ├── mapper/                  # Transformación de datos
│   │   └── gif.mapper.ts        # Mapeo entre API y modelo interno
│   ├── pages/                   # Páginas de la aplicación
│   │   ├── dashboard/           # Página principal
│   │   ├── search/              # Página de búsqueda
│   │   ├── trending/            # Página de trending
│   │   └── gifs-history/        # Página de historial
│   └── services/                # Lógica de negocio
│       └── gifs.service.ts      # Servicio principal
└── shared/                      # 🛠️ Componentes compartidos
    └── components/              
        └── spinner/             # Componente de carga
```

### Características de la Arquitectura

1. **Separación de Responsabilidades**: Cada carpeta tiene una función específica
2. **Componentes Reutilizables**: Estructura modular para facilitar el mantenimiento
3. **Servicios Centralizados**: Lógica de negocio en servicios dedicados
4. **Interfaces Tipadas**: Contratos claros para los datos
5. **Mappers**: Transformación limpia entre diferentes formatos de datos

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Angular 19** - Framework principal
- **TypeScript** - Lenguaje de programación
- **Tailwind CSS** - Framework de estilos
- **RxJS** - Programación reactiva
- **Angular Signals** - Estado reactivo

### APIs y Servicios
- **Giphy API** - Fuente de datos de GIFs
- **LocalStorage** - Persistencia local

### Herramientas de Desarrollo
- **Angular CLI** - Herramientas de desarrollo
- **Prettier** - Formateo de código
- **Jasmine/Karma** - Testing

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd gifs-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   El proyecto ya incluye una API key de Giphy configurada en `src/environments/environment.ts`:
   ```typescript
   export const environment = {
     giphyApiKey: "2o3qrtuSNNMezuutXyNdASo8C2Plcw1V",
     giphyApiUrl: "https://api.giphy.com/v1",
   };
   ```

4. **Ejecutar la aplicación**
   ```bash
   npm start
   ```

5. **Abrir en el navegador**

   La aplicación estará disponible en `http://localhost:4200`

## 📱 Uso de la Aplicación

### Navegación Principal
- **Dashboard**: Página principal con menú lateral
- **Trending**: GIFs más populares del momento
- **Search**: Búsqueda de GIFs por texto
- **History**: Acceso a búsquedas recientes

### Funcionalidades de Búsqueda
1. Navega a la sección "Search"
2. Escribe tu término de búsqueda
3. Presiona Enter para buscar
4. Los resultados se mostrarán en un grid responsive
5. Tu búsqueda se guardará automáticamente en el historial

### Gestión del Historial
- Las búsquedas se guardan automáticamente
- Máximo 10 búsquedas en el historial
- Navegación rápida desde el menú lateral
- Persistencia entre sesiones

## 🔧 Scripts Disponibles

```bash
# Servidor de desarrollo
npm start

# Construcción para producción
npm run build

# Construcción en modo watch
npm run watch

# Ejecutar tests
npm test
```

## 🏛️ Estructura del Código

### Servicios (`src/app/gifs/services/`)
- **GifsService**: Servicio principal que maneja:
  - Comunicación con la API de Giphy
  - Gestión del historial de búsquedas
  - Estado reactivo con Angular Signals

### Interfaces (`src/app/gifs/interfaces/`)
- **giphy.interfaces.ts**: Tipos de la API externa de Giphy
- **gif.interface.ts**: Interfaces del dominio interno

### Mappers (`src/app/gifs/mapper/`)
- **GifMapper**: Transformación entre datos de la API y el dominio

### Componentes (`src/app/gifs/components/`)
- **GifList**: Visualización en grid de los GIFs
- **SideMenu**: Menú lateral con navegación
- **SideMenuHeader**: Encabezado del menú
- **SideMenuOptions**: Opciones de navegación

### Páginas (`src/app/gifs/pages/`)
- **Dashboard**: Layout principal de la aplicación
- **Trending**: Página de GIFs populares
- **Search**: Página de búsqueda
- **GifsHistory**: Página de historial

## 🎯 Características Técnicas

### Estado Reactivo
- Uso de Angular Signals para estado reactivo
- Efectos automáticos para persistencia
- Computed values para derivaciones

### Lazy Loading
- Carga diferida de páginas para mejor rendimiento
- Routing modular con `loadComponent`

### Persistencia Local
- Historial de búsquedas guardado en LocalStorage
- Gestión automática del límite de historial

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado como parte del curso de Angular de Fernando Herrera en Udemy.

---

**¡Disfruta explorando y buscando GIFs! 🎉**
