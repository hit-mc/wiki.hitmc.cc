export const getRootFunc = (subpath: string) => {
    return (newSubpath: TemplateStringsArray) => {
        const t = `${subpath}${newSubpath[0]}`;
        // replace all '//' to '/'
        return t.replace(/\/\//g, '/');
    }
};
