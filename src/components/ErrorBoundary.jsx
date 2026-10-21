import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Blue Mug Cafe failed to render', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-[#070809] text-white flex items-center justify-center px-6 text-center">
          <div className="max-w-md">
            <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Blue Mug Cafe
            </p>
            <h1 className="font-display text-3xl sm:text-4xl mb-4">Something went wrong</h1>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Please refresh the page to continue browsing our menu and cafe experience.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-black hover:bg-amber-300 transition-colors"
            >
              Refresh page
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
