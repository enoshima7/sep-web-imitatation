type RequireContext = {
  keys(): string[];
  // eslint-disable-next-line
  (id: string): any;
  <T>(id: string): T;
  resolve(id: string): string;
  /** The module id of the context module. This may be useful for module.hot.accept. */
  id: string;
};
const requireAll = (requireContext: RequireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context("./svg", false, /\.svg$/);
requireAll(req);
