# Resume

## Based on old resume

I used my my [old resume](https://github.com/tylerjlawson/myResume/releases/tag/1.0) and turned it into [a hugo theme](https://themes.gohugo.io/simple-resume/). The source code for the theme is at [tylerjlawson/simple-resume](https://github.com/tylerjlawson/simple-resume).

## Automated resume development

Content is updated for my resume using the [content.yaml file](data/content.yaml). After I make an update to the content of the resume, I push the changes and the pipeline will do the rest. In my Github actions [main.yml](.github/workflowds/main.yml) I build the site using hugo, install dependencies (html-pdf) for the [print.js](print.js) script to work, then print to [static/Resume.pdf](static/Resume.pdf) and deploy the hugo built site with the pdf to the [gh-pages branch](https://github.com/tylerjlawson/resume/tree/gh-pages). I also make sure to automatically commit any changes to the printed pdf when it is printed in the pipeline.
