const sessionData = {
    1: {
        title: "Sesión 1: Introducción a los Estándares de Codificación",
        content: `
            <p>Los estándares de codificación son un conjunto de reglas y buenas prácticas que permiten escribir código claro, organizado y fácil de mantener.</p>
            <p>Su aplicación mejora la legibilidad, facilita el trabajo en equipo, reduce errores y simplifica el mantenimiento y la escalabilidad del software.</p>
            <p>Organizaciones como W3C, ISO/IEC 29110, OWASP y ECMA establecen estándares para el desarrollo web, la seguridad y la gestión de proyectos.</p>
            <p>Un código profesional utiliza nombres descriptivos, convenciones de nomenclatura y buenas prácticas que permiten que otros desarrolladores comprendan y mantengan el software con facilidad.</p>
        `
    },
    2: {
        title: "Sesión 2: Herramientas de Validación de Código",
        content: `
            <p>Las herramientas de validación analizan el código para verificar que cumpla con los estándares, detectando errores de sintaxis, malas prácticas y proponiendo mejoras.</p>
            <p>Existen validadores especializados como W3C Validator para HTML y CSS, ESLint y JSHint para JavaScript, WAVE para accesibilidad y Lighthouse para evaluar el rendimiento de sitios web.</p>
            <p>Los plugins para editores de código, como Prettier, ESLint, Pylint y Checkstyle, automatizan el formateo y ayudan a mantener un código limpio y consistente.</p>
            <p>El uso constante de estas herramientas mejora la calidad, confiabilidad y profesionalismo del software, facilitando el desarrollo y el mantenimiento de los proyectos.</p>
        `
    },
    3: {
        title: "Sesión 3: Consideraciones Generales para la Nomenclatura",
        content: `
            <p>La nomenclatura en programación consiste en aplicar convenciones para nombrar variables, funciones, clases y archivos, haciendo que el código sea más claro y fácil de comprender.</p>
            <p>Las principales convenciones son camelCase, PascalCase, kebab-case y UPPER_SNAKE_CASE, cada una utilizada según el tipo de elemento del código.</p>
            <p>Organizaciones como W3C, ISO/IEC 29110 y OWASP establecen estándares que promueven buenas prácticas, calidad y seguridad en el desarrollo de software.</p>
            <p>Aplicar reglas de nomenclatura y estándares facilita el mantenimiento del código, mejora la colaboración entre desarrolladores y favorece el trabajo organizado en equipos pequeños.</p>
        `
    },
    4: {
        title: "Sesión 4: Estándares de Nombres Descriptivos y Significativos",
        content: `
            <p>Los nombres descriptivos permiten que el código sea más comprensible, facilitando su lectura, mantenimiento y reutilización sin necesidad de comentarios adicionales.</p>
            <p>Cada elemento del código debe seguir una convención específica: camelCase para variables y métodos, PascalCase para clases y UPPER_SNAKE_CASE para constantes.</p>
            <p>Un código limpio también requiere un formato consistente, incluyendo indentación uniforme, espacios adecuados y separación lógica entre bloques de código.</p>
            <p>Los nombres deben expresar claramente su propósito, ser fáciles de entender y representar el dominio del problema, mejorando la calidad y mantenibilidad del software.</p>
        `
    },
    5: {
        title: "Sesión 5: Estándares de Diseño y Programación",
        content: `
            <p>Los estándares de diseño y programación establecen buenas prácticas para desarrollar aplicaciones organizadas, legibles y fáciles de mantener a lo largo del tiempo.</p>
            <p>En diseño web, el uso de HTML semántico, CSS y las pautas de accesibilidad WCAG mejora la estructura, la experiencia del usuario y el posicionamiento en buscadores.</p>
            <p>Los estándares de programación abarcan la sintaxis, la organización del código y su formato, promoviendo funciones claras, nombres descriptivos e indentación consistente.</p>
            <p>Cada lenguaje posee sus propias especificaciones, como ECMAScript para JavaScript, PEP 8 para Python e ISO/IEC 14882 para C++, garantizando código de calidad y compatible con las mejores prácticas.</p>
        `
    },
    6: {
        title: "Sesión 6: Estándares de Buenas Prácticas en Codificación",
        content: `
            <p>Las buenas prácticas de codificación permiten desarrollar software más eficiente, seguro y fácil de mantener.</p>
            <p>Entre los principios fundamentales destacan DRY (Don't Repeat Yourself), que evita la duplicación de código; KISS (Keep It Simple, Stupid), que promueve soluciones simples; y YAGNI (You Aren't Gonna Need It), que recomienda implementar solo las funcionalidades necesarias.</p>
            <p>Además, las prácticas de seguridad de OWASP ayudan a proteger las aplicaciones web frente a vulnerabilidades como inyecciones de código y robo de información. Aplicar estos estándares reduce errores, mejora la calidad del software y facilita su mantenimiento futuro.</p>
        `
    },
    7: {
        title: "Sesión 7: Estándares de Codificación Condicional",
        content: `
            <p>Las estructuras condicionales deben seguir convenciones que mejoren la legibilidad y el mantenimiento del código.</p>
            <p>Entre las principales prácticas se encuentran el uso obligatorio de llaves ({}), una indentación consistente, la aplicación de early return para evitar anidamientos profundos, el uso de switch cuando existen múltiples condiciones fijas y la creación de nombres descriptivos para las condiciones.</p>
            <p>Estas convenciones permiten que el código sea más claro, reduzcan errores y faciliten el trabajo en equipo durante el desarrollo de software.</p>
        `
    },
    8: {
        title: "Sesión 8: Estándares de Codificación Repetitiva",
        content: `
            <p>Los estándares de codificación repetitiva permiten crear bucles más eficientes, legibles y seguros.</p>
            <p>Se recomienda utilizar nombres descriptivos para los contadores, mantener una indentación clara y evitar cálculos repetitivos dentro de los ciclos para mejorar el rendimiento.</p>
            <p>También es fundamental prevenir los bucles infinitos actualizando correctamente las condiciones de salida y seleccionar el tipo de bucle adecuado (for, while o do-while) según la necesidad del problema. Estas prácticas facilitan el mantenimiento del código y reducen errores durante el desarrollo.</p>
        `
    },
    9: {
        title: "Sesión 9: Estándares de Errores y Manejo de Excepciones",
        content: `
            <p>El manejo de errores y excepciones es fundamental para garantizar la estabilidad de las aplicaciones.</p>
            <p>Mediante el uso de estructuras como try, catch y finally, es posible detectar y controlar fallos sin que el programa se detenga inesperadamente.</p>
            <p>Además, se recomienda utilizar nombres descriptivos para los errores, mostrar mensajes claros al usuario y diferenciar entre errores esperados e inesperados. Estas prácticas mejoran la experiencia del usuario, facilitan la depuración y permiten desarrollar aplicaciones más robustas y confiables.</p>
        `
    },
    10: {
        title: "Sesión 10: Estándares de Programación",
        content: `
            <p>Los estándares de programación permiten organizar el código fuente y diseñar arquitecturas que faciliten el desarrollo, mantenimiento y escalabilidad de los proyectos.</p>
            <p>Para ello, se promueve la división del código en módulos y dependencias, utilizando herramientas como los módulos ES (ESM) con las palabras clave import y export.</p>
            <p>Además, una estructura organizada mejora la colaboración entre desarrolladores, reduce errores y facilita la gestión de proyectos de distintos niveles de complejidad, desde aplicaciones simples hasta sistemas full-stack y arquitecturas en capas.</p>
        `
    },
    11: {
        title: "Sesión 11: Estándares de Modularización y Reutilización",
        content: `
            <p>La modularización consiste en dividir una aplicación en módulos independientes para facilitar su desarrollo, mantenimiento y escalabilidad.</p>
            <p>Por su parte, la reutilización busca crear componentes que puedan emplearse en diferentes partes de una aplicación o en distintos proyectos.</p>
            <p>Entre los principios más importantes destacan la responsabilidad única, el principio DRY (no repetir código), la alta cohesión y el bajo acoplamiento. Aplicar estos estándares mejora la organización del software, facilita el trabajo en equipo y reduce el tiempo de desarrollo.</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Add mystery ash particles
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.width = p.style.height = (Math.random() * 4 + 2) + 'px';
        p.style.animationDuration = (Math.random() * 4 + 4) + 's';
        p.style.animationDelay = Math.random() * 6 + 's';
        particlesContainer.appendChild(p);
    }

    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('summary-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const sessionNum = card.getAttribute('data-session');
            const data = sessionData[sessionNum];
            
            if(data) {
                modalTitle.textContent = data.title;
                modalBody.innerHTML = data.content;
                modal.classList.remove('hidden');
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});