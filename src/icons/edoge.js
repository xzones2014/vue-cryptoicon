const Edoge = {
  symbol: 'edoge',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zM9.471 9.016c-.508 0-1.04-.046-1.502.18-.243.374-.3.906-.011 1.28.277.249.681.249 1.04.26 1.606 0 3.212-.011 4.819 0-.046 1.392 0 2.796-.023 4.2-1.433 0-2.878-.012-4.31 0-.37 0-.81.068-.972.441-.127.34-.127.781.162 1.041.243.204.59.204.902.216 1.41 0 2.808-.012 4.218 0 0 1.528-.023 3.067.011 4.606-1.826.034-3.663-.022-5.49.034-.773-.045-1.062.997-.577 1.483.277.25.682.215 1.04.238 3.282 0 6.553.011 9.835 0 1.687-.011 3.467-.43 4.738-1.573 1.433-1.246 2.057-3.158 2.138-4.98.081-1.835-.277-3.804-1.502-5.264-1.04-1.257-2.647-1.913-4.253-2.083-1.607-.147-2.677-.08-4.83-.08H9.47zm6.334 5.92v-3.611c.011-.204.023-.487.254-.555.728-.068 1.4-.045 2.184-.045 1.375-.08 2.855.26 3.837 1.256 1.086 1.11 1.364 2.74 1.329 4.222-.023 1.336-.37 2.74-1.318 3.747-.924.962-2.31 1.37-3.628 1.313-.887 0-1.572.023-2.358-.045-.289-.023-.3-.362-.312-.589 0-1.335.012-2.66 0-3.995.659-.012 1.33.056 1.976-.046.798-.113.798-1.494.012-1.607-.659-.09-1.318-.034-1.976-.045z"/>`;
  },
  colorIcon() {
    return `<g fill="none"><circle cx="16" cy="16" r="16" fill="#0FACF3"/><path fill="#FFF" d="M9.471 9.016h5.432c2.154 0 3.224-.068 4.83.079 1.607.17 3.214.826 4.254 2.083 1.225 1.46 1.583 3.43 1.502 5.263-.08 1.823-.705 3.735-2.138 4.98-1.271 1.144-3.05 1.563-4.738 1.574-3.282.011-6.553 0-9.835 0-.358-.023-.763.011-1.04-.238-.485-.486-.196-1.528.578-1.483 1.826-.056 3.663 0 5.49-.034-.035-1.539-.012-3.078-.012-4.606-1.41-.012-2.809 0-4.218 0-.313-.012-.66-.012-.902-.216-.289-.26-.289-.701-.162-1.04.162-.374.601-.442.971-.442 1.433-.012 2.878 0 4.31 0 .024-1.404-.022-2.808.024-4.2-1.607-.011-3.213 0-4.82 0-.358-.011-.762-.011-1.04-.26-.288-.374-.23-.906.012-1.28.462-.226.994-.18 1.502-.18zm6.334 5.92c.658.011 1.317-.046 1.976.045.786.113.786 1.494-.012 1.607-.647.102-1.317.034-1.976.046.012 1.335 0 2.66 0 3.995.012.227.023.566.312.589.786.068 1.47.045 2.358.045 1.317.057 2.704-.35 3.628-1.313.948-1.007 1.295-2.41 1.318-3.747.035-1.482-.243-3.112-1.33-4.222-.981-.996-2.46-1.335-3.836-1.256-.784 0-1.456-.023-2.184.045-.231.068-.243.351-.254.555v3.61z"/></g>`;
  }
};
export default Edoge;