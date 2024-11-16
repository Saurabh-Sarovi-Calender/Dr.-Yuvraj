
    document.querySelector('.button-instruction').addEventListener('click', () => {
        // Create a new SpeechSynthesisUtterance instance
        const message = new SpeechSynthesisUtterance(
            "डेमो मतदानासाठी कमळ निशाणी समोरील निळे बटण दाबावे"
        );
        
        // Set the speech properties
        message.lang = "en-US"; // Language and accent
        message.rate = 1; // Speed of the voice
        message.pitch = 1; // Pitch of the voice
        
        // Speak the message
        window.speechSynthesis.speak(message);
    });

    document.getElementById('voteButton5').addEventListener('click', function () {
        // Show the thank you modal
        const modal = document.getElementById('thankYouModal');
        modal.style.display = 'flex';
    
        // Play the "Too too" sound
        const tootSound = document.getElementById('tootSound');
        tootSound.play();
    
        // Hide the modal after 3 seconds
        setTimeout(() => {
            modal.style.display = 'none';
        }, 3000);
    });
    