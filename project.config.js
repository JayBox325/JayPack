const projectConfig = {
    
    // CMS or static site. True or false.
    cms: false,

    // Custom domain for localhost if on a CMS project (Confirmed this works with MAMP so far)
    domain: 'local.jaypack.com',

    // Project structure
    distRoot: 'build', // Where everything is output
    srcRoot: '_src', // Source files,

    cmsTemplateExt: 'twig' // If your project is using a CMS, set your file extension here. e.g. twig for CraftCMS
}

export default projectConfig