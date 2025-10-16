const handleEmailClick = (e) => {
    e.preventDefault();

    const email = 'solutionliftguard@gmail.com';
    const subject = 'Inquiry About LiftGuard Solution';
    const body = `Hello Team,

I would like to know more about your services.`;

    // mailto URL (works well on both desktop & mobile)
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Gmail compose URL (for desktop only)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Detect if user is on mobile device
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
        // On mobile → open default email app
        window.location.href = mailtoUrl;
    } else {
        // On desktop → try Gmail first, then fallback
        const newWindow = window.open(gmailUrl, '_blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            window.location.href = mailtoUrl;
        }
    }
};
