/*
 * Сафари плохо обновляет сам себя
 * и оставляет некрасивый шлейф.
 * (баг с reflow-repaint)
 * триггерим repaint вручную
 */
const FORCE_REPAINT_MS = 10

export function forceRepaint () {

    document.body.classList.add('repaint-view')

    setTimeout(() => {
        document.body.classList.remove('repaint-view')
    }, FORCE_REPAINT_MS)

}
