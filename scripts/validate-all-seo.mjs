import { execSync } from 'child_process';

const runAllSeoValidation = () => {
  console.log('[SEO Validation] Starting comprehensive SEO Audit Pipeline...');
  
  const runScript = (command, label) => {
    console.log(`\n------------------------------------------------------------------------------`);
    console.log(`[SEO Pipeline] Running: ${label} (${command})`);
    console.log(`------------------------------------------------------------------------------`);
    try {
      const output = execSync(command, { stdio: 'inherit' });
    } catch (e) {
      console.error(`\n[SEO Pipeline] FAIL: ${label} failed with exit code ${e.status || 1}`);
      process.exit(1);
    }
  };

  // 1. Audit Route Inventory
  runScript('node scripts/validate-routes.mjs', 'Route Inventory Validation');

  // 2. Audit Canonical & Domain Compliance
  runScript('node scripts/validate-canonicals.mjs', 'Canonical & Domain Compliance Validation');

  // 3. Audit Pre-rendered HTML Structures (titles, descriptions, H1, lang, canonicals)
  runScript('node scripts/validate-sitemap.mjs', 'Pre-rendered HTML Validation');

  // 4. Audit Live Local HTTP Responses & 404 Status Codes
  runScript('node scripts/validate-status-codes.mjs', 'Local HTTP Server & 404 Status Code Validation');

  // 5. Audit Hydration Parity (pre vs post hydration checks)
  runScript('node scripts/validate-hydration.mjs', 'Hydration Parity Validation');

  // 6. Audit AI Discoverability Files (llms.txt / llms-full.txt / robots.txt)
  runScript('node scripts/validate-llms.mjs', 'AI Discoverability Validation');

  console.log('\n==============================================================================');
  console.log('[SEO Pipeline] SUCCESS: All SEO audits completed successfully!');
  console.log('==============================================================================\n');
  process.exit(0);
};

runAllSeoValidation();
