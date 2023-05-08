const { DateTime } = require ("luxon");

module.exports = function(eleventyConfig) {
    
        // définir les chemin des assets
        eleventyConfig.addPassthroughCopy('./src/style.css');
        eleventyConfig.addPassthroughCopy('./src/assets');
        eleventyConfig.addPassthroughCopy('./src/admin');

        eleventyConfig.addFilter("postDate", (dateObj) => {
            return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
        })
        //eleventyConfig.addFilter("year", () => `${new Date().getFullYear()}`); // {% year %}

        //définition des répertoires de travail :
        return {
        dir: {
            input: "src",
            output: "public"
        }
        
    };
}