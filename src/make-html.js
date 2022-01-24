export function makeHTML(entry) {
    const html = entry.content;
    const date = entry.metadata.date;
    const template = `
    <section>
        ${html}
        <p>Skrifað : ${date} </p>
    </section>
    `
    return template;
} 

export function makeIndex(entries){
    let list='';
    for (const entry of entries){
        const {slug , date, title}= entry;
        const link =`<li><a href="${slug}.html">${title}</a></li>`;
        list+=link;
    }
    return `<ul>${list}</ul>`;
}
/**
 * Takes HTML for að single blog entry and returns
 * it with the site template
 */
export function blogTemplate(title, blog, showBack = false){
    const back =showBack ? `<p><a href="/">Til baka <a></p>`: '';
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>${title ?? ''}</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            ${blog ?? ''}
            ${back}
            <p></p>
        </body>
    </html>`;



}