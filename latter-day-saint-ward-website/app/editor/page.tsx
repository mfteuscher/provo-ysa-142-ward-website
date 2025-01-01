import { Toaster } from 'sonner';

import { PlateEditor } from '@/components/editor/plate-editor';
// import { SettingsProvider } from '@/components/editor/settings';

export default function Page() {
  return (
    <div className="h-[600px] max-w-screen-md mx-auto border" data-registry="plate">
      {/* <SettingsProvider> */}
        <PlateEditor />
      {/* </SettingsProvider> */}

      <Toaster />
    </div>
  );
}
