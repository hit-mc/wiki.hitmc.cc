export const getRootFunc = (subpath: string) => {
    return (newSubpath: TemplateStringsArray) => {
        const t = `${subpath}${newSubpath[0]}`;
        if (t.endsWith('//')) {
            return t.substring(0, t.length - 1);
        }
        return t;
    }
};
