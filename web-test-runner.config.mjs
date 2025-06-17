import { playwrightLauncher } from '@web/test-runner-playwright';
import { webpack } from '@web/test-runner-webpack';

export default {
    files: 'src/**/*.test.ts',
    nodeResolve: true,
    browsers: [playwrightLauncher({ product: 'chromium', headless: true })],
    plugins: [
        webpack({
            configPath: './webpack.config.ts',
            mode: 'development',
        }),
    ],
};
