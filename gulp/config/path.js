import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export    const path = {
            build: {
                js:`${buildFolder}/js/`,
                images: `${buildFolder}/img/`,
                css:`${buildFolder}/css`,
                html: `${buildFolder}/`,
                files: `${buildFolder}/files/`,
                fonts: `${buildFolder}/fonts/`,
            },
            src: {
                js:`${srcFolder}/js/app.js`,
                images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
                svg: `${srcFolder}/img/**/*.svg`,
                scss: `${srcFolder}/scss/style.scss`,
                html: `${srcFolder}/*.html`,
                files: `${srcFolder}/files/**/*.*`,
            },
            watch: {
                js:`${srcFolder}/js/**/*.js`,
                images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,ico,gif,webp}`,
                scss: `${srcFolder}/scss/**/*.scss`,
                html: `${srcFolder}/**/*.html`,
                files: `${srcFolder}/files/**/*.*`,
            },
            clean: buildFolder,
            buildFolder: buildFolder,
            srcFolder: srcFolder,
            rootFolder: rootFolder,
            ftp: ``,
        }