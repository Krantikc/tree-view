export class Config {
    public enableSelection?: boolean;
    public enableDelete?: boolean;
    public expandCls?: string;
    public collapseCls?: string;

    constructor(config?: any) {
        this.enableSelection = config.enableSelection || true;
        this.enableDelete = config.enableDelete || true;
        this.expandCls = config.expandCls || 'fa-chevron-down';
        this.collapseCls = config.collapseCls || 'fa-chevron-right';
    }
}
