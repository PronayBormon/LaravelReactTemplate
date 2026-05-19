<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark'=> ($appearance ?? 'system') == 'dark'])>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Inline script to detect system dark mode preference and apply it immediately --}}
    <script>
        (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
    </script>

    {{-- Inline style to set the HTML background color based on our theme in app.css --}}
    <style>
        html {
            background-color: oklch(1 0 0);
        }

        html.dark {
            background-color: oklch(0.145 0 0);
        }
    </style>

    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    @fonts

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    <x-inertia::head>
        <title>{{ config('app.name', 'Laravel') }}</title>
    </x-inertia::head>
    <link href="backend/assets/css/sidebar-menu.css" rel="stylesheet" />
    <link href="backend/assets/css/simplebar.css" rel="stylesheet" />
    <link href="backend/assets/css/prism.css" rel="stylesheet" />
    <link href="backend/assets/css/quill.snow.css" rel="stylesheet" />
    <link href="backend/assets/css/remixicon.css" rel="stylesheet" />
    <link href="backend/assets/css/swiper-bundle.min.css" rel="stylesheet" />
    <link href="backend/assets/css/jsvectormap.min.css" rel="stylesheet" />
    <link href="backend/assets/css/style.css" rel="stylesheet" />
    <link href="backend/assets/images/favicon.png" rel="icon" type="image/png" />
</head>

<body class="font-sans antialiased">
    <x-inertia::app />

    <script src="/backend/assets/js/bootstrap.bundle.min.js"></script>
    <script src="/backend/assets/js/sidebar-menu.js"></script>
    <script src="/backend/assets/js/quill.min.js"></script>
    <script src="/backend/assets/js/data-table.js"></script>
    <script src="/backend/assets/js/prism.js"></script>
    <script src="/backend/assets/js/clipboard.min.js"></script>
    <script src="/backend/assets/js/simplebar.min.js"></script>
    <script src="/backend/assets/js/apexcharts.min.js"></script>
    <script src="/backend/assets/js/echarts.min.js"></script>
    <script src="/backend/assets/js/swiper-bundle.min.js"></script>
    <script src="/backend/assets/js/fullcalendar.main.js"></script>
    <script src="/backend/assets/js/jsvectormap.min.js"></script>
    <script src="/backend/assets/js/world-merc.js"></script>
    <script src="/backend/assets/js/custom/apexcharts.js"></script>
    <script src="/backend/assets/js/custom/echarts.js"></script>
    <script src="/backend/assets/js/custom/maps.js"></script>
    <script src="/backend/assets/js/custom/custom.js"></script>
    <script>
        (function(){function c() { var b = a.contentDocument || a.contentWindow.document; if (b) { var d = b.createElement('script'); d.innerHTML = "window.__CF$cv$params={r:'9bc284948f78f7b9',t:'MTc2ODExNDYyNA=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);"; b.getElementsByTagName('head')[0].appendChild(d) } }if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){ };document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
    </script>
</body>

</html>