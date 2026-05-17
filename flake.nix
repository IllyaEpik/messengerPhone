{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  
  # ... inputs as before
  outputs = { self, nixpkgs }: 
  let
    pkgs = nixpkgs.legacyPackages.x86_64-linux;
  in {
    devShells.x86_64-linux.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodejs
        watchman

        jdk17
        android-tools

        gnumake
        gcc
        pkg-config
        # ... your other react native tools
      ];

      # This environment variable tells nix-ld where the libraries are
      shellHook = ''
        export NIX_LD_LIBRARY_PATH=${pkgs.lib.makeLibraryPath [
          pkgs.stdenv.cc.cc
          pkgs.openssl
          pkgs.zlib
        ]}
      '';
    };
  };

}