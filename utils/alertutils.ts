import { Page, expect } from '@playwright/test';

export function expectAlert( page : Page, messages : string[]){
    page.on('dialog', async(dialog) =>{
        messages.push(dialog.message());
        await dialog.accept();
    });
}