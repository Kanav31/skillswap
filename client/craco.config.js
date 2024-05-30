module.exports = {
    // Other craco configurations
    webpack: {
        module: {
            rules: [
                {
                    test: /\.svg$/, // Matches files ending with .svg
                    use: 'file-loader', // Use file-loader to treat SVGs as assets
                    options: {
                        name: '[path][name].[ext]', // Optional: Specify output filename format
                    },
                },
                // ... other rules for other file types
            ],
        },
    },
};
