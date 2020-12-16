import { createContext, useContext } from 'react';

var CalendarContext = /*#__PURE__*/createContext();
var useCalendarContext = function useCalendarContext() {
  return useContext(CalendarContext);
};

export { CalendarContext, useCalendarContext };
//# sourceMappingURL=context.js.map
