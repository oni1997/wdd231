document.addEventListener('DOMContentLoaded', function() {
    // Create Mobile Wireframe
    const mobileWireframe = document.getElementById('mobile-wireframe');
    
    const mobileHTML = `
        <div style="border: 2px solid #2c7da0; padding: 10px; margin-bottom: 20px; text-align: center;">
            <div style="background-color: #1a2b3c; color: white; padding: 10px; margin-bottom: 15px;">
                <div style="font-weight: bold;">Onesmus Maenzanise</div>
                <div style="margin-top: 10px; display: flex; justify-content: center; gap: 10px;">
                    <div style="border: 1px solid white; padding: 5px; font-size: 12px;">Home</div>
                    <div style="border: 1px solid white; padding: 5px; font-size: 12px;">About</div>
                    <div style="border: 1px solid white; padding: 5px; font-size: 12px;">Projects</div>
                </div>
            </div>
            
            <div style="background-color: white; padding: 15px; margin-bottom: 15px; text-align: center;">
                <div style="border-bottom: 2px solid #2c7da0; padding-bottom: 10px; font-weight: bold;">Software Engineer & AI Enthusiast</div>
                <div style="margin-top: 10px; height: 80px; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center;">Introduction Text</div>
                <div style="margin-top: 10px; height: 100px; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center;">Core Technologies List</div>
            </div>
            
            <div style="background-color: white; padding: 15px; text-align: center;">
                <div style="border-bottom: 2px solid #2c7da0; padding-bottom: 10px; font-weight: bold;">Professional Focus</div>
                <div style="margin-top: 10px; height: 60px; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center;">Focus Area 1</div>
                <div style="margin-top: 10px; height: 60px; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center;">Focus Area 2</div>
                <div style="margin-top: 10px; height: 60px; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center;">Focus Area 3</div>
            </div>
            
            <div style="background-color: #1a2b3c; color: white; padding: 10px; margin-top: 15px; text-align: center;">
                <div style="font-size: 12px;">© 2025 Onesmus Maenzanise. All Rights Reserved.</div>
            </div>
        </div>
    `;
    
    mobileWireframe.innerHTML = mobileHTML;
    
    // Create Desktop Wireframe
    const desktopWireframe = document.getElementById('desktop-wireframe');
    
    const desktopHTML = `
        <div style="border: 2px solid #2c7da0; padding: 10px; margin-bottom: 20px;">
            <div style="background-color: #1a2b3c; color: white; padding: 10px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
                <div style="font-weight: bold;">Onesmus Maenzanise</div>
                <div style="display: flex; gap: 20px;">
                    <div style="border: 1px solid white; padding: 5px;">Home</div>
                    <div style="border: 1px solid white; padding: 5px;">About</div>
                    <div style="border: 1px solid white; padding: 5px;">Projects</div>
                </div>
            </div>
            
            <div style="background-color: white; padding: 20px; margin-bottom: 20px;">
                <div style="border-bottom: 2px solid #2c7da0; padding-bottom: 10px; font-weight: bold; text-align: center;">Software Engineer & AI Enthusiast</div>
                <div style="margin-top: 20px; display: flex; gap: 30px;">
                    <div style="flex: 2; height: 120px; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center;">Introduction Text</div>
                    <div style="flex: 1; height: 120px; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center;">Core Technologies List</div>
                </div>
            </div>
            
            <div style="background-color: white; padding: 20px;">
                <div style="border-bottom: 2px solid #2c7da0; padding-bottom: 10px; font-weight: bold; text-align: center;">Professional Focus</div>
                <div style="margin-top: 20px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                    <div style="height: 150px; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center;">Focus Area 1</div>
                    <div style="height: 150px; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center;">Focus Area 2</div>
                    <div style="height: 150px; border: 1px dashed #ccc; display: flex; align-items: center; justify-content: center;">Focus Area 3</div>
                </div>
            </div>
            
            <div style="background-color: #1a2b3c; color: white; padding: 10px; margin-top: 20px; text-align: center;">
                <div>© 2025 Onesmus Maenzanise. All Rights Reserved.</div>
            </div>
        </div>
    `;
    
    desktopWireframe.innerHTML = desktopHTML;
});