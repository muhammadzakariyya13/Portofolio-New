$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            const hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
            
            // Update active state in navbar
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        }
    });
    
    // Handle navbar active state on scroll
    $(window).scroll(function() {
        const scrollPos = $(document).scrollTop();
        
        $('section').each(function() {
            const top = $(this).offset().top - 100;
            const bottom = top + $(this).outerHeight();
            
            if (scrollPos >= top && scrollPos <= bottom) {
                const id = $(this).attr('id');
                $('.nav-link').removeClass('active');
                $(`.nav-link[href="#${id}"]`).addClass('active');
            }
        });
        
        // Add background to navbar on scroll
        if (scrollPos > 50) {
            $('.navbar').css('padding', '10px 0');
        } else {
            $('.navbar').css('padding', '15px 0');
        }
    });
    
    // Initialize skill progress animation
    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Animate skill bars when they come into view
    function animateSkillBars() {
        $('.skill-progress').each(function() {
            if (isInViewport(this)) {
                const width = $(this).css('width');
                
                // Only animate if not already animated
                if (width === '0px') {
                    const targetWidth = $(this).attr('style').split('width:')[1].split('%')[0] + '%';
                    $(this).css('width', '0%').animate({
                        width: targetWidth
                    }, 1500);
                }
            }
        });
    }
    
    // Initialize all progress bars to 0 width
    $('.skill-progress').css('width', '0px');
    
    // Trigger animation on scroll and on page load
    $(window).on('scroll resize', animateSkillBars);
    animateSkillBars();
});

function toogleDetail(e) {
    const target = $(e.target);

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active");
    } else {
        $(target).html("Less Info").addClass("active");
    }

    // Handle both about-exp-item and experience-item
    const item = $(target).closest(".about-exp-item, .experience-item");
    const detailClass = item.hasClass("about-exp-item") ? ".about-exp-item-detail" : ".experience-item-detail";
    const detail = $(item).children(detailClass);
    
    $(detail).slideToggle(300);
}

function onFormSubmit(e) {
    e.preventDefault();
    
    const email = $("#inp_email");
    const subject = $("#inp_subject");
    const message = $("#inp_message");
    
    // Simple validation
    if(!$(email).val()) {
        showFormError(email, "Email is required");
    } else if (!$(subject).val()) {
        showFormError(subject, "Subject is required");
    } else if (!$(message).val()) {
        showFormError(message, "Message is required");
    } else {
        // Success - you would normally send the form data to a server here
        showFormSuccess();
        
        // Reset form
        $(email).val("");
        $(subject).val("");
        $(message).val("");
    }
}

function showFormError(element, message) {
    $(element).addClass("is-invalid");
    
    // Remove error class on input
    $(element).on("input", function() {
        $(this).removeClass("is-invalid");
    });
    
    // Show error message
    const feedback = $("<div>").addClass("invalid-feedback").text(message);
    
    // Remove any existing error message
    $(element).siblings(".invalid-feedback").remove();
    
    // Add new error message
    $(element).after(feedback);
}

function showFormSuccess() {
    // Create a success alert
    const alert = $("<div>")
        .addClass("alert alert-success mt-3")
        .text("Message sent successfully!");
    
    // Add the alert to the form
    $(".contact-form").prepend(alert);
    
    // Remove the alert after 3 seconds
    setTimeout(() => {
        alert.fadeOut(500, function() {
            $(this).remove();
        });
    }, 3000);
}