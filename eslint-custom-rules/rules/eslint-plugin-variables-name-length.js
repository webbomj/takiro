module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "The variable name must be more than 2 characters.",
        },
        schema: []
    },
    create(context) {
        return {
            VariableDeclarator(node) {
                if (node.id.name.length <= 2) {
                    context.report({
                        node,
                        message: "The variable name must be more than 2 characters.",
                    });
                }
            }        
        };
    }
};