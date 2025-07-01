# 🎬 Gifs App

Una aplicación web moderna para buscar, explorar y gestionar GIFs utilizando la API de Giphy. Desarrollada con Angular 19 con una arquitectura modular y escalable.

## 📋 Descripción

Gifs App es una aplicación de escritorio que permite a los usuarios:

- **Explorar GIFs trending** en tiempo real con infinite scroll
- **Buscar GIFs** por palabras clave, descripción o etiquetas
- **Gestionar historial de búsquedas** con persistencia local
- **Navegar** a través de una interfaz intuitiva y responsive
- **Mantener estado de scroll** entre navegaciones

## ✨ Funcionalidades Principales

### 🚀 Trending Gifs

- Visualización de los GIFs más populares del momento
- **Infinite scroll** para carga automática de contenido
- **Persistencia del estado de scroll** entre navegaciones
- Interfaz responsive con grid adaptativo de 3 columnas
- Carga automática desde la API de Giphy

### 🔍 Búsqueda de GIFs

- Búsqueda en tiempo real por texto
- Resultados instantáneos con la API de Giphy
- Interfaz de búsqueda intuitiva
- Historial automático de búsquedas

### 📚 Historial de Búsquedas

- Persistencia local de búsquedas recientes
- Navegación rápida a búsquedas anteriores
- Límite de 10 búsquedas en el historial
- Acceso directo desde el menú lateral

### 🎨 Interfaz de Usuario

- Diseño moderno con Tailwind CSS
- Menú lateral con navegación intuitiva
- Grid responsive de 3 columnas para visualización de GIFs
- Spinner de carga para mejor UX
- Estado de scroll persistente

## 🏗️ Arquitectura del Proyecto

El proyecto está organizado en una estructura modular y escalable:

```
src/app/
├── gifs/                            # 🎯 Módulo principal de GIFs
│   ├── components/                  # Componentes de presentación
│   │   ├── gif-list/                # Lista de GIFs con grid de 3 columnas
│   │   └── side-menu/               # Menú lateral con navegación
│   │       ├── side-menu-header/    # Encabezado del menú
│   │       └── side-menu-options/   # Opciones de navegación
│   ├── interfaces/                  # Contratos y tipos
│   │   ├── giphy.interfaces.ts      # Interfaces de la API externa
│   │   └── gif.interface.ts         # Interfaces internas
│   ├── mapper/                      # Transformación de datos
│   │   └── gif.mapper.ts            # Mapeo entre API y modelo interno
│   ├── pages/                       # Páginas de la aplicación
│   │   ├── dashboard/               # Página principal
│   │   ├── search/                  # Página de búsqueda
│   │   ├── trending/                # Página de trending con infinite scroll
│   │   └── gifs-history/            # Página de historial
│   └── services/                    # Lógica de negocio
│       └── gifs.service.ts          # Servicio principal
└── shared/                          # 🛠️ Componentes y servicios compartidos
    ├── components/
    │   └── spinner/                 # Componente de carga
    └── services/
        └── scroll-state.service.ts  # Servicio de estado de scroll
```

### Características de la Arquitectura

1. **Separación de Responsabilidades**: Cada carpeta tiene una función específica
2. **Componentes Reutilizables**: Estructura modular para facilitar el mantenimiento
3. **Servicios Centralizados**: Lógica de negocio en servicios dedicados
4. **Interfaces Tipadas**: Contratos claros para los datos
5. **Mappers**: Transformación limpia entre diferentes formatos de datos
6. **Estado Reactivo**: Uso de Angular Signals para gestión de estado
7. **Persistencia de Estado**: Servicios para mantener estado entre navegaciones

## 🛠️ Tecnologías Utilizadas

### Frontend

- **Angular 19** - Framework principal con standalone components
- **TypeScript** - Lenguaje de programación tipado
- **Tailwind CSS** - Framework de estilos utility-first
- **RxJS** - Programación reactiva
- **Angular Signals** - Estado reactivo moderno
- **Angular ViewChild** - Referencias a elementos del DOM

### APIs y Servicios

- **Giphy API** - Fuente de datos de GIFs
- **LocalStorage** - Persistencia local del historial
- **HTTP Client** - Comunicación con APIs externas

### Herramientas de Desarrollo

- **Angular CLI** - Herramientas de desarrollo
- **Prettier** - Formateo de código
- **Jasmine/Karma** - Testing
- **PostCSS** - Procesamiento de CSS

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
- **Trending**: GIFs más populares del momento con infinite scroll
- **Search**: Búsqueda de GIFs por texto
- **History**: Acceso a búsquedas recientes

### Funcionalidades de Búsqueda

1. Navega a la sección "Search"
2. Escribe tu término de búsqueda
3. Presiona Enter para buscar
4. Los resultados se mostrarán en un grid de 3 columnas
5. Tu búsqueda se guardará automáticamente en el historial

### Infinite Scroll en Trending

- Los GIFs trending se cargan automáticamente al hacer scroll
- El estado de scroll se mantiene entre navegaciones
- Carga de 20 GIFs por página

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
  - Gestión del historial de búsquedas con persistencia
  - Estado reactivo con Angular Signals
  - Efectos automáticos para persistencia

### Servicios Compartidos (`src/app/shared/services/`)

- **ScrollStateService**: Gestión del estado de scroll:
  - Persistencia de posición de scroll
  - Detección de scroll infinito
  - Estado reactivo con signals

### Interfaces (`src/app/gifs/interfaces/`)

- **giphy.interfaces.ts**: Tipos de la API externa de Giphy
- **gif.interface.ts**: Interfaces internas:
  - `GifItem`: Modelo principal de GIF
  - `MenuOption`: Opciones del menú de navegación

### Mappers (`src/app/gifs/mapper/`)

- **GifMapper**: Transformación entre datos de la API y el modelo interno:
  - `toGifItem()`: Conversión individual
  - `toGifItems()`: Conversión de arrays

### Componentes (`src/app/gifs/components/`)

- **GifList**: Visualización en grid de 3 columnas de los GIFs
- **SideMenu**: Menú lateral con navegación
- **SideMenuHeader**: Encabezado del menú
- **SideMenuOptions**: Opciones de navegación

### Páginas (`src/app/gifs/pages/`)

- **Dashboard**: Layout principal de la aplicación
- **Trending**: Página de GIFs populares con infinite scroll
- **Search**: Página de búsqueda
- **GifsHistory**: Página de historial

## 🎯 Características Técnicas Avanzadas

### Estado Reactivo con Angular Signals

- **Signals**: Estado reactivo moderno para mejor rendimiento
- **Computed Values**: Valores derivados automáticamente
- **Effects**: Efectos secundarios automáticos para persistencia
- **ViewChild**: Referencias reactivas a elementos del DOM

### Infinite Scroll

- Detección automática del final de la lista
- Carga progresiva de contenido
- Estado de scroll persistente
- Optimización de rendimiento

### Persistencia de Estado

- **LocalStorage**: Historial de búsquedas persistente
- **Scroll State**: Posición de scroll mantenida
- **Efectos Automáticos**: Sincronización automática con almacenamiento

### Lazy Loading

- Carga diferida de páginas para mejor rendimiento
- Routing modular con `loadComponent`
- Componentes standalone

### Grid Responsive

- Grid de 3 columnas adaptativo
- Computed values para organización automática
- Responsive design con Tailwind CSS

## 🔄 Flujo de Datos

1. **API Externa** → **GifMapper** → **Modelo Interno**
2. **Modelo** → **Signals** → **Componentes**
3. **Componentes** → **Servicios** → **Persistencia**
4. **Navegación** → **Scroll State** → **Restauración de Estado**

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**¡Disfruta explorando y buscando GIFs! 🎉**
