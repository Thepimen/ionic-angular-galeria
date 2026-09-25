# Ionic & Angular — Galería y Consumo de API REST

Aplicación móvil híbrida desarrollada con **Ionic Framework** y **Angular (Standalone Components)** para el módulo de **Desarrollo de Interfaces (0488)** en Institutos Nebrija.

---

## Despliegue en Producción
La aplicación se encuentra desplegada y operativa en Vercel:
**[Ver Demo en Vivo (Vercel)](https://ionic-angular-galeria.vercel.app)**

---

## Ecosistema Tecnológico
- **Framework móvil:** Ionic Framework 7+ / 9+ (`@ionic/angular`)
- **Framework web:** Angular 22 (Standalone Components)
- **Runtime:** Node.js v24.19.0 / npm
- **Lenguaje:** TypeScript
- **Consumo asíncrono:** Fetch API / Promesas
- **Despliegue / Hosting:** Vercel (SPA Rewrites)

---

## Características Implementadas
1. **Galería Multimedia (Data Binding):** Demostración de enlace de datos unidireccional (*Interpolación* `{{ }}` y *Property Binding* `[src]`) consumiendo assets locales estáticos.
2. **Arquitectura por Capas:**
   - **Modelos (`models/`):** Tipado estricto con interfaces (`User`).
   - **Servicios (`services/`):** Capa lógica de negocio desacoplada con métodos asíncronos (`UsersService`).
   - **Páginas / Controladores (`pages/`):** Vistas reactivas con gestión de estados de carga (`IonSpinner`) y renderizado de colecciones (`IonList`, `IonItem`, `IonAvatar`).
3. **Consumo de API Externa:** Integración en tiempo real con el endpoint público de `https://dummyjson.com/users`.
4. **Diseño Multiplataforma:** Interfaz adaptable automáticamente al estándar visual de iOS y Material Design (Android).

---

## Instalación y Ejecución Local

1. Clonar el repositorio:
```bash
git clone https://github.com/Thepimen/ionic-angular-galeria.git
cd ionic-angular-galeria
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar el entorno de desarrollo:
```bash
ionic serve
# o
npm start
```
