function handleViewportSizeChange() {
    const viewportWidth = window.innerWidth;
    
    if (viewportWidth < 768) {
        document.body.style.backgroundColor = '#FEF1E6' ;
    } else if (viewportWidth >= 768 && viewportWidth <= 991) {
        document.body.style.backgroundColor = '#F9D5A7';
    } else {
        
        document.body.style.backgroundColor = '#FEF1E6';
    }
}


window.addEventListener('resize', handleViewportSizeChange);

handleViewportSizeChange();