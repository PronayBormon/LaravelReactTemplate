<?php

namespace App\Http\Controllers\Web\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function privacyPolicy(): Response
    {
        return $this->renderPage(
            Page::where('slug', 'privacy-policy')->first()
                ?: Page::where('slug', 'privacy-and-policy')->first()
                ?: Page::privacyPolicy()
        );
    }

    public function termsAndConditions(): Response
    {
        return $this->renderPage(Page::termsAndConditions());
    }

    private function renderPage(Page $page): Response
    {
        abort_unless($page->status, 404);

        return Inertia::render('frontend/page', [
            'page' => [
                'title' => $page->title,
                'slug' => $page->slug,
                'content' => $page->content,
            ],
        ]);
    }
}
