<template>
    <header class="flex justify-between gap-4 max-w-7xl mx-auto px-4">
        <Link href="/">
        <h1>{{ props.site.name }}</h1>
        </Link>
        <nav>
            <Link href="/this-page-does-not-exist">404 Page</Link>
            <Link style="margin-left: 1rem" href="/sample-page">Sample Page</Link>
        </nav>
    </header>
</template>

<script setup>
import { Link, usePage } from '@inertiajs/inertia-vue3'

const { props } = usePage()
</script>
